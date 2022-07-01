package com.rastreioagora.app;

import com.facebook.react.bridge.WritableMap;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.Notification;
import androidx.annotation.RequiresApi;
import android.os.Build;
import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import javax.annotation.Nullable;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import androidx.annotation.NonNull;
import java.util.ArrayList;
import java.util.Collections;

public class BackgroundHeadlessTaskService extends HeadlessJsTaskService {
  @Override
  protected @Nullable
  HeadlessJsTaskConfig getTaskConfig(Intent intent) {
      Bundle extras = intent.getExtras();
      WritableMap data = extras != null ? Arguments.fromBundle(extras) : null;
      return new HeadlessJsTaskConfig(
        "BackgroundHeadlessTask", // Use the registered headless Task here
        data,
        5000);
  }
}