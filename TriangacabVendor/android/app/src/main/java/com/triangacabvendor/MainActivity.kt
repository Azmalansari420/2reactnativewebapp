package com.triangacabvendor

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.webkit.GeolocationPermissions
import android.webkit.WebChromeClient
import android.webkit.WebView
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

    override fun getMainComponentName(): String = "TriangacabVendor"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // --- ✅ Create Notification Channel (Android 8+) ---
        createNotificationChannel()

        // --- ✅ Request Notification Permission (Android 13+) ---
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            if (ContextCompat.checkSelfPermission(
                    this,
                    android.Manifest.permission.POST_NOTIFICATIONS
                ) != PackageManager.PERMISSION_GRANTED
            ) {
                ActivityCompat.requestPermissions(
                    this,
                    arrayOf(android.Manifest.permission.POST_NOTIFICATIONS),
                    1
                )
            }
        }

        // --- ✅ Get FCM Token ---
        FirebaseMessaging.getInstance().token.addOnCompleteListener { task ->
            if (task.isSuccessful) {
                val token = task.result
                println("🔥 Vendor FCM Token: $token")

                // TODO: Is token ko backend API pe bhejna zaroori hai
                // Example: sendTokenToServer(token)
            } else {
                println("❌ FCM Token fetch failed: ${task.exception?.message}")
            }
        }

        // --- ✅ WebView Debug + Geolocation Enable ---
        WebView.setWebContentsDebuggingEnabled(true)

        val webView = WebView(this).apply {
            settings.javaScriptEnabled = true
            settings.setGeolocationEnabled(true)
            webChromeClient = object : WebChromeClient() {
                override fun onGeolocationPermissionsShowPrompt(
                    origin: String?,
                    callback: GeolocationPermissions.Callback?
                ) {
                    // Auto allow location without asking prompt
                    callback?.invoke(origin, true, false)
                }
            }
        }
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                notificationChannelId,
                notificationChannelName,
                NotificationManager.IMPORTANCE_HIGH // ✅ High importance for heads-up
            ).apply {
                description = "Default notification channel for vendor app"
                enableLights(true)
                enableVibration(true)
            }

            val notificationManager: NotificationManager =
                getSystemService(NotificationManager::class.java)
            notificationManager.createNotificationChannel(channel)
        }
    }
}
