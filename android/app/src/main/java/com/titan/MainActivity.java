package com.titan;

import android.os.Handler;
import android.os.Message;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class MainActivity extends ReactActivity {

    private Handler handler = new Handler(){
        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            switch (msg.what){
                case 1:
                    Log.d("ycm","pre send test event");
                    ReactContext context = getReactNativeHost().getReactInstanceManager().getCurrentReactContext();
                    if (context != null) {
                        Log.d("ycm","send test event");
                        context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("test","洋葱数学");
                    }
                    break;
            }

        }
    };

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "titan";
    }


    @Override
    protected void onResume() {
        super.onResume();
        handler.sendEmptyMessage(1);

    }
}
