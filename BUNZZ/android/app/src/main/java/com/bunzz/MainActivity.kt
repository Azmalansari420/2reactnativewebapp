package com.bunzz

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import com.google.firebase.messaging.FirebaseMessaging

class MainActivity : ReactActivity() {

  private val notificationChannelId = "default_channel"
  private val notificationChannelName = "Default Channel"

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "BUNZZ"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(savedInstanceState)
      createNotificationChannel()

      // Check for notification permission on Android 13 and higher
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
          if (ContextCompat.checkSelfPermission(this, android.Manifest.permission.POST_NOTIFICATIONS)
              != PackageManager.PERMISSION_GRANTED) {
              ActivityCompat.requestPermissions(
                  this,
                  arrayOf(android.Manifest.permission.POST_NOTIFICATIONS),
                  1
              )
          }
      }

      // Handle Firebase Messaging Token
      FirebaseMessaging.getInstance().token.addOnCompleteListener { task ->
          if (task.isSuccessful) {
              val token = task.result
              println("FCM Token: $token")
          }
      }
  }

  private fun createNotificationChannel() {
      // Create the notification channel for devices running Android 8.0 (API level 26) and above
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
          val channel = NotificationChannel(
              notificationChannelId,
              notificationChannelName,
              NotificationManager.IMPORTANCE_DEFAULT
          )
          channel.description = "Default notification channel"
          val notificationManager: NotificationManager =
              getSystemService(NotificationManager::class.java)
          notificationManager.createNotificationChannel(channel)
      }
  }






}
