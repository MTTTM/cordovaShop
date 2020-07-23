/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.vue.example.app;

import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import org.apache.cordova.*;

public class MainActivity extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }
        Window window = getWindow();
//        // 5.0以上系统状态栏透明
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {

            window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            window.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window.setStatusBarColor(Color.TRANSPARENT);

        }

        //        View.SYSTEM_UI_FLAG_LAYOUT_STABLE：全屏显示时保证尺寸不变。
//        View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN：Activity全屏显示，状态栏显示在Activity页面上面。
//        View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION：效果同View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
//        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION：隐藏导航栏
//        View.SYSTEM_UI_FLAG_FULLSCREEN：Activity全屏显示，且状态栏被隐藏覆盖掉。
//        View.SYSTEM_UI_FLAG_VISIBLE：Activity非全屏显示，显示状态栏和导航栏。
//        View.INVISIBLE：Activity伸展全屏显示，隐藏状态栏。
//        View.SYSTEM_UI_LAYOUT_FLAGS：效果同View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
//        View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY：必须配合View.SYSTEM_UI_FLAG_FULLSCREEN和View.SYSTEM_UI_FLAG_HIDE_NAVIGATION组合使用，达到的效果是拉出状态栏和导航栏后显示一会儿消失。

// 全屏展示
//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
//            window.setStatusBarColor(Color.TRANSPARENT);
//        }
//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
//            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
//                // 全屏显示，隐藏状态栏和导航栏，拉出状态栏和导航栏显示一会儿后消失。
//                window.getDecorView().setSystemUiVisibility(
//                        View.SYSTEM_UI_FLAG_LAYOUT_STABLE
//                                // | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
//                                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
//                                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
//                                // | View.SYSTEM_UI_FLAG_FULLSCREEN
//                                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
//
//
//            } else {
//                // 全屏显示，隐藏状态栏
//                window.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_FULLSCREEN);
//            }
//        }

        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);
    }
}
