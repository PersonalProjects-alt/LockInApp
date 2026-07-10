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


class BlockerModuleClass(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext ) {

    override fun getName(): String { //only returning the string that we want to refer to in react
        return "BlcokerModule"
    }

    @ReactMethod fun blokcedAppsModule(promise: Promise, appList: List, duration: Int) {


    }



}