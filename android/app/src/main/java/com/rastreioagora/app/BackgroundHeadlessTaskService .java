package com.rastreioagora.app;

import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import javax.annotation.Nullable;

public class BackgroundHeadlessTaskService extends HeadlessJsTaskService {
  @Override
  protected @Nullable
  HeadlessJsTaskConfig getTaskConfig(Intent intent) {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
          createChannel();
          Notification notification = new NotificationCompat.Builder(getApplicationContext(), "demo")
                  .setContentTitle("Headless Work")
                  .setTicker("runn")
                  .setSmallIcon(R.mipmap.ic_launcher)
                  .setOngoing(true)
                  .build();
          startForeground(1, notification);
      }
  
      Bundle extras = intent.getExtras();
      if (extras != null) {
          return new HeadlessJsTaskConfig(
                  "BackgroundHeadlessTask",
                  Arguments.fromBundle(extras),
                  5000, 
                  true 
          );
      }
      return null;
  }
  @RequiresApi(Build.VERSION_CODES.O)
  private void createChannel() {
      String description = "test channel";
      int importance = NotificationManager.IMPORTANCE_DEFAULT;
      NotificationChannel channel = new NotificationChannel("demo", "test", importance);
      channel.setDescription(description);
      NotificationManager notificationManager =
              (NotificationManager) getApplicationContext().getSystemService(NOTIFICATION_SERVICE);
  
      notificationManager.createNotificationChannel(channel);
  
  } 
}