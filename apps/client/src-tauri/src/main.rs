use tauri::{CustomMenuItem, Manager, Menu, MenuItem, PhysicalPosition, Submenu, SystemTray, SystemTrayEvent, WindowEvent};

fn main() {
  // Menu Items
  let about = CustomMenuItem::new("about", "About");
  let preferences = CustomMenuItem::new("preferences", "Preferences");

  let configure_blinks_interval = CustomMenuItem::new("configure_blink_intervals", "Configure Intervals");
  let configure_blinks_animation = CustomMenuItem::new("configure_blinks_animation", "Configure Animation");

  let configure_stretching_interval = CustomMenuItem::new("configure_stretching_intervals", "Configure Intervals");
  let configure_stretching_animation = CustomMenuItem::new("configure_stretching_animation", "Configure Animation");
  let display_stretching_progress = CustomMenuItem::new("display_stretching_progress", "Display Stretching Progress");
  let skip_stretching = CustomMenuItem::new("skip_stretching", "Skip Stretching");

  let daily = CustomMenuItem::new("daily", "Daily");
  let weekly = CustomMenuItem::new("weekly", "Weekly");
  let monthly = CustomMenuItem::new("monthly", "Monthly");

  let purchase = CustomMenuItem::new("purchase", "Purchase");
  let renew = CustomMenuItem::new("renew", "Renew");
  let status = CustomMenuItem::new("status", "Status");

  // Submenus
  let blinks = Submenu::new("Blinks", Menu::new().add_item(configure_blinks_interval).add_item(configure_blinks_animation));
  let stretching = Submenu::new("Stretching", Menu::new()
      .add_item(configure_stretching_interval)
      .add_item(configure_stretching_animation)
      .add_item(display_stretching_progress)
      .add_item(skip_stretching));

  let analytics_menu = Submenu::new("Analytics", Menu::new().add_item(daily).add_item(weekly).add_item(monthly));
  let license_menu = Submenu::new("License", Menu::new().add_item(purchase).add_item(renew).add_item(status));

  // Main Menu
  let menu = Menu::new()
      .add_submenu(Submenu::new("BlinkMate", Menu::new()
          .add_item(about)
          .add_item(preferences)
          .add_native_item(MenuItem::Separator)
          .add_native_item(MenuItem::Quit)))
      .add_submenu(Submenu::new("Reminders", Menu::new()
          .add_submenu(blinks)
          .add_native_item(MenuItem::Separator)
          .add_submenu(stretching)))
      .add_submenu(analytics_menu)
      .add_submenu(license_menu);

  let system_tray = SystemTray::new();

  tauri::Builder::default()
      .menu(menu)
      .system_tray(system_tray)
      .setup(|app| {
          let window = app.get_window("main").unwrap();
          window.set_decorations(false).unwrap(); // Remove title bar and borders for custom window shape
          Ok(())
      })
      .on_system_tray_event(|app, event| {
          if let SystemTrayEvent::LeftClick { position, .. } = event {
              let window = app.get_window("main").unwrap();
              if window.is_visible().unwrap() {
                  window.hide().unwrap();
              } else {
                  let window_size = window.outer_size().unwrap();
                  let x = position.x as f64 - (window_size.width / 2) as f64;
                  window.set_position(PhysicalPosition::new(x, position.y.into())).unwrap();
                  window.show().unwrap();
                  window.set_focus().unwrap();
              }
          }
      })
      .on_window_event(|event| {
          if let WindowEvent::Focused(false) = event.event() {
              event.window().hide().unwrap();
          }
      })
      .on_menu_event(|event| {
          match event.menu_item_id() {
              "about" => event.window().emit("show-about", {}).unwrap(),
              "preferences" => event.window().emit("show-preferences", {}).unwrap(),
              "configure_blink_intervals" => event.window().emit("configure-blinks-intervals", {}).unwrap(),
              "configure_blinks_animation" => event.window().emit("configure-blinks-animation", {}).unwrap(),
              "configure_stretching_intervals" => event.window().emit("configure-stretching-intervals", {}).unwrap(),
              "configure_stretching_animation" => event.window().emit("configure-stretching-animation", {}).unwrap(),
              "display_stretching_progress" => event.window().emit("display-stretching-progress", {}).unwrap(),
              "skip_stretching" => event.window().emit("skip-stretching", {}).unwrap(),
              "daily" => event.window().emit("show-daily-analytics", {}).unwrap(),
              "weekly" => event.window().emit("show-weekly-analytics", {}).unwrap(),
              "monthly" => event.window().emit("show-monthly-analytics", {}).unwrap(),
              "purchase" => event.window().emit("purchase-license", {}).unwrap(),
              "renew" => event.window().emit("renew-license", {}).unwrap(),
              "status" => event.window().emit("license-status", {}).unwrap(),
              _ => {}
          }
      })
      .run(tauri::generate_context!())
      .expect("failed to run app");
}
