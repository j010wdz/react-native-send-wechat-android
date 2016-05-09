# react-native-send-wechat-android
本项目为React Native的Android原生模块，使用Android Intent打开微信朋友圈分享窗口

[![npm version](http://img.shields.io/npm/v/react-native-send-wechat-android.svg?style=flat-square)](https://npmjs.org/package/react-native-send-wechat-android "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/react-native-send-wechat-android.svg?style=flat-square)](https://npmjs.org/package/react-native-send-wechat-android "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-native-send-wechat-android.svg?style=flat-square)](https://npmjs.org/package/react-native-send-wechat-android "View this project on npm")


使用本模块可以很方便的打开微信朋友圈的分享编辑窗口（前提是手机上已经安装了微信）

### 安装

```bash
npm install react-native-send-wechat-android --save
```

### 添加到你的android项目

* 在 `android/setting.gradle` 文件中添加以下内容

```gradle
...
include ':RNSendWeChatModule', ':app'
project(':RNSendWeChatModule').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-send-wechat-android')
```

* 在 `android/app/build.gradle` 文件中添加如下内容

```gradle
...
dependencies {
    ...
    compile project(':RNSendWeChatModule')
}
```

* 注册模块 >= 0.18 (在 MainActivity.java 文件中添加内容)

```java
import com.j010wdz.rnsendwechat.RNSendWeChatPackage;  // <--- import

public class MainActivity extends ReactActivity {
  ......

  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RNSendWeChatPackage()); // <------ 添加这行代码到你的MainActivity类
  }

  ......

}
```

* 注册模块 <= 0.17 (在 MainActivity.java 文件中添加内容)

```java
import com.j010wdz.rnsendwechat.RNSendWeChatPackage;  // <--- import

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {
  ......

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    mReactRootView = new ReactRootView(this);

    mReactInstanceManager = ReactInstanceManager.builder()
      .setApplication(getApplication())
      .setBundleAssetName("index.android.bundle")
      .setJSMainModuleName("index.android")
      .addPackage(new MainReactPackage())
      .addPackage(new RNSendWeChatPackage()) // <------ 添加这行代码到你的MainActivity类
      .setUseDeveloperSupport(BuildConfig.DEBUG)
      .setInitialLifecycleState(LifecycleState.RESUMED)
      .build();

    mReactRootView.startReactApplication(mReactInstanceManager, "AndroidRNSample", null);

    setContentView(mReactRootView);
  }

  ......

}
```

## 示例 打开分享微信朋友圈编辑窗口
```javascript
var SendWeChatAndroid = require('react-native-send-wechat-android');

SendWeChatAndroid.sendPicturesToTimeLine({
  title: '打开微信分享朋友圈的编辑窗口，同时填写好本段文字，并选择好以下图片',
  pictures: '',
});
```

## License
MIT
