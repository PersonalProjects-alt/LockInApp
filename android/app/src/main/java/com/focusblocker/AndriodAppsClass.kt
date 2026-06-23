package com.focusblocker

import android.content.Intent
import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.drawable.Drawable
import android.util.Base64
import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableNativeArray
import com.facebook.react.bridge.WritableNativeMap
import java.io.ByteArrayOutputStream

class AndroidApps(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "AndroidAppsModule"
    }

    @ReactMethod
    fun getInstalledApps(promise: Promise) {
        try {
            val packageManager = reactApplicationContext.packageManager

            val intent = Intent(Intent.ACTION_MAIN, null)
            intent.addCategory(Intent.CATEGORY_LAUNCHER)

            val apps = packageManager.queryIntentActivities(intent, 0)

            val appsArray = WritableNativeArray()

            for ((index, app) in apps.withIndex()) {
                val appName = app.loadLabel(packageManager).toString()
                val packageName = app.activityInfo.packageName
                val appIcon = app.loadIcon(packageManager)
                val iconBase64 = drawableToBase64(appIcon)

                val appMap = WritableNativeMap()
                appMap.putInt("id", index)
                appMap.putString("name", appName)
                appMap.putString("packageName", packageName)
                appMap.putString("icon", iconBase64)

                appsArray.pushMap(appMap)

                Log.d("AndroidApps", "App: $appName | Package: $packageName")
            }

            promise.resolve(appsArray)

        } catch (e: Exception) {
            promise.reject("ANDROID_APPS_ERROR", e)
        }
    }

    private fun drawableToBase64(drawable: Drawable): String {
        val width = if (drawable.intrinsicWidth > 0) drawable.intrinsicWidth else 96
        val height = if (drawable.intrinsicHeight > 0) drawable.intrinsicHeight else 96

        val bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
        val canvas = Canvas(bitmap)

        drawable.setBounds(0, 0, canvas.width, canvas.height)
        drawable.draw(canvas)

        val outputStream = ByteArrayOutputStream()
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, outputStream)

        val byteArray = outputStream.toByteArray()
        return "data:image/png;base64," + Base64.encodeToString(byteArray, Base64.NO_WRAP)
    }
}