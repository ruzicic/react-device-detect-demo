import * as rdd from "react-device-detect";

import "./App.css";

function App() {
  const results = [
    {
      prop: "isMobile",
      value: rdd.isMobile,
      description: "returns true if device type is mobile or tablet",
    },
    {
      prop: "isMobileOnly",
      value: rdd.isMobileOnly,
      description: "returns true if device type is mobile",
    },
    {
      prop: "isTablet",
      value: rdd.isTablet,
      description: "returns true if device type is tablet",
    },
    {
      prop: "isBrowser",
      value: rdd.isBrowser,
      description: "returns true if device type is browser",
    },
    {
      prop: "isSmartTV",
      value: rdd.isSmartTV,
      description: "returns true if device type is smarttv",
    },
    {
      prop: "isWearable",
      value: rdd.isWearable,
      description: "returns true if device type is wearable",
    },
    {
      prop: "isConsole",
      value: rdd.isConsole,
      description: "returns true if device type is console",
    },
    {
      prop: "isAndroid",
      value: rdd.isAndroid,
      description: "returns true if os type is Android",
    },
    {
      prop: "isWinPhone",
      value: rdd.isWinPhone,
      description: "returns true if os type is Windows Phone",
    },
    {
      prop: "isIOS",
      value: rdd.isIOS,
      description: "returns true if os type is iOS",
    },
    {
      prop: "isChrome",
      value: rdd.isChrome,
      description: "returns true if browser is Chrome",
    },
    {
      prop: "isFirefox",
      value: rdd.isFirefox,
      description: "returns true if browser is Firefox",
    },
    {
      prop: "isSafari",
      value: rdd.isSafari,
      description: "returns true if browser is Safari",
    },
    {
      prop: "isOpera",
      value: rdd.isOpera,
      description: "returns true if browser is Opera",
    },
    {
      prop: "isIE",
      value: rdd.isIE,
      description: "returns true if browser is Internet Explorer",
    },
    {
      prop: "isEdge",
      value: rdd.isEdge,
      description: "returns true if browser is Edge or Edge Chromium",
    },
    {
      prop: "isYandex",
      value: rdd.isYandex,
      description: "returns true if browser is Yandex",
    },
    {
      prop: "isChromium",
      value: rdd.isChromium,
      description: "returns true if browser is Chromium",
    },
    {
      prop: "isMobileSafari",
      value: rdd.isMobileSafari,
      description: "returns true if browser is Mobile Safari",
    },
    {
      prop: "osVersion",
      value: rdd.osVersion,
      description: "returns os version (e.g 7 for Windows or 6 for Android)",
    },
    {
      prop: "osName",
      value: rdd.osName,
      description: "returns os name (e.g Windows,Android)",
    },
    {
      prop: "fullBrowserVersion",
      value: rdd.fullBrowserVersion,
      description:
        "returns full browser version (e.g 65.0.3325.181 for Chrome)",
    },
    {
      prop: "browserVersion",
      value: rdd.browserVersion,
      description:
        "returns browser major version (e.g 65 in Chrome or 9 in IE)",
    },
    {
      prop: "browserName",
      value: rdd.browserName,
      description: "returns browser name",
    },
    {
      prop: "mobileVendor",
      value: rdd.mobileVendor,
      description: "returns mobile device vendor (e.g LG, iPhone etc ",
    },
    {
      prop: "mobileModel",
      value: rdd.mobileModel,
      description: "returns mobile device model (e.g Nexus 5)",
    },
    {
      prop: "engineName",
      value: rdd.engineName,
      description:
        "returns browser engine name (e.g Gecko for FF or WebKit for Chrome)",
    },
    {
      prop: "engineVersion",
      value: rdd.engineVersion,
      description: "returns engine version",
    },
    { prop: "getUA", value: rdd.getUA, description: "returns user agent" },
    {
      prop: "deviceType",
      value: rdd.deviceType,
      description: "returns device type (e.g mobile or tablet)",
    },
    {
      prop: "isIOS13",
      value: rdd.isIOS13,
      description: "returns true/false if device is running on iOS13",
    },
    {
      prop: "isIPhone13",
      value: rdd.isIPhone13,
      description:
        "returns true/false if device is iPhone and running on iOS13",
    },
    {
      prop: "isIPad13",
      value: rdd.isIPad13,
      description: "returns true/false if device is iPad and running on iOS13",
    },
    {
      prop: "isIPod13",
      value: rdd.isIPod13,
      description: "returns true/false if device is iPod and running on iOS13",
    },
    {
      prop: "isElectron",
      value: rdd.isElectron,
      description: "returns true/false if running on Electron",
    },
    {
      prop: "isEdgeChromium",
      value: rdd.isEdgeChromium,
      description: "returns true/false if browser is Edge Chromium",
    },
    {
      prop: "isLegacyEdge",
      value: rdd.isLegacyEdge,
      description: "returns true if browser is Edge",
    },
    {
      prop: "isWindows",
      value: rdd.isWindows,
      description: "returns true/false if os is Windows",
    },
    {
      prop: "isMacOs",
      value: rdd.isMacOs,
      description: "returns true/false if os is Mac OS",
    },
    {
      prop: "deviceDetect",
      value: rdd.deviceDetect,
      description: "return data object which includes all data about device",
    },
  ].map((result) => {
    if (typeof result.value === "boolean") {
      return {
        ...result,
        value: result.value ? "✅" : "❌",
      };
    }

    return result;
  });

  return (
    <div className="App">
      <h1>react-device-detect demo</h1>
      <p>
        This is a demo to check how{" "}
        <a
          href="https://www.npmjs.com/package/react-device-detect"
          rel="nofollow"
          target="blank"
        >
          react-device-detect
        </a>{" "}
        behaves on different devices and browsers
      </p>
      <table>
        <thead>
          <tr>
            <th>Selector</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.prop}>
              <td data-title="Selector">
                <code>{r.prop}</code>
              </td>
              <td data-title="Value">{r.value}</td>
              <td data-title="Description">{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
