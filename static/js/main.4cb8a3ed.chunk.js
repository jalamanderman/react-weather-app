(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{285:function(e,t,a){e.exports=a(508)},290:function(e,t,a){},292:function(e,t,a){},293:function(e,t,a){},504:function(e,t,a){},505:function(e,t,a){},506:function(e,t,a){},507:function(e,t,a){},508:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(69),c=a.n(i),s=(a(290),a(291),a(39)),o=a(40),l=a(43),h=a(41),u=a(22),d=a(42),v=(a(292),a(293),a(33)),m=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={value:"",warning:!1},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.sendValueToParent=a.sendValueToParent.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"sendValueToParent",value:function(e){e.preventDefault(),""===this.state.value.trim()||null!==this.state.value.match(/\d+/g)?this.setState({warning:!0}):(this.props.callBackFromParent(this.state.value),this.setState({warning:!1}))}},{key:"render",value:function(){var e=r.a.createElement(v.d,{error:!0,header:"There was an error",content:this.props.error}),t=r.a.createElement(v.d,{warning:!0,header:"Please check that you've entered a valid city"});return r.a.createElement("div",{className:"SearchBar"},this.props.error&&e,this.state.warning&&t,r.a.createElement(v.b,{onSubmit:this.sendValueToParent},r.a.createElement(v.c,{className:"SearchBar-input",placeholder:"Search the weather in...",action:{icon:"search"},onChange:this.handleChange,value:this.state.value,size:"huge",type:"text",autoFocus:!0})))}}]),t}(n.Component),p=(a(504),a(505),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).saveDataToLocalStorage=a.saveDataToLocalStorage.bind(Object(u.a)(a)),a.deleteDataFromLocalStorage=a.deleteDataFromLocalStorage.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"deleteDataFromLocalStorage",value:function(){var e=JSON.parse(localStorage.getItem("cityList")),t=e.indexOf(this.props.weatherData.city);e.splice(t,1),localStorage.setItem("cityList",JSON.stringify(e)),this.props.callBackFromParent(e)}},{key:"saveDataToLocalStorage",value:function(){var e=JSON.parse(localStorage.getItem("cityList"))||[];e.push(this.props.weatherData.city),localStorage.setItem("cityList",JSON.stringify(e)),this.props.callBackFromParent(e)}},{key:"degToCompass",value:function(e){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.floor(e/22.5+.5)%16]}},{key:"render",value:function(){var e=this.props.weatherData,t=e.city,a=e.weather,n=e.country,i=e.temp,c=e.wind,s=e.windDirection,o=Math.round(i-273.15),l=Math.round(1.609*c),h=this.degToCompass(s),u=r.a.createElement(v.a,{className:"green-btn",size:"mini",onClick:this.saveDataToLocalStorage,content:"Save to favorites"}),d=r.a.createElement(v.a,{negative:!0,size:"mini",onClick:this.deleteDataFromLocalStorage,content:"Delete from favorites"}),m=this.props.savedCities;return r.a.createElement("div",{className:"WeatherCard"},r.a.createElement("h1",{className:"WeatherCard-degrees"},o,"\xb0"),r.a.createElement("p",null,l," kph ",h),r.a.createElement("div",{className:"WeatherCard-icon-container"},r.a.createElement("i",{className:"wi wi-owm-".concat(a[0].id," WeatherCard-icon")}),r.a.createElement("p",null,a[0].main)),r.a.createElement("h2",{className:"WeatherCard-city"},t,", ",n),m.includes(t)?d:u)}}]),t}(n.Component)),g=(a(506),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).getWeather=a.getWeather.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"getWeather",value:function(e){this.props.callBackFromParent(e.target.value)}},{key:"render",value:function(){var e=this,t=this.props.savedCities.map(function(t){return r.a.createElement(v.a,{className:"Favorites-btn",size:"tiny",value:t,key:"".concat(t,"-button"),onClick:e.getWeather,content:t})});return r.a.createElement("div",{className:"Favorites"},r.a.createElement("h3",{className:"Favorites-title"},"My favorite cities"),r.a.createElement("div",{className:"Favorites-button-container"},t))}}]),t}(n.Component)),f=(a(507),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).getWeather=a.getWeather.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"getWeather",value:function(e){this.props.callBackFromParent(e.target.value)}},{key:"render",value:function(){var e=this,t=this.props.recentCities.map(function(t){return r.a.createElement(v.a,{className:"Favorites-btn",size:"tiny",value:t,key:"".concat(t,"-button"),onClick:e.getWeather,content:t})});return r.a.createElement("div",{className:"Recents"},r.a.createElement("h4",{className:"Recents-title"},"Recent searches"),r.a.createElement("div",{className:"Recents-button-container"},t))}}]),t}(n.Component)),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={weatherData:{weather:"",city:"",country:"",temp:0,wind:0,windDirection:""},searchDone:!1,recentCities:[],savedCities:[],hasSavedCities:!1,hasRecentCities:!1,errorMessage:""},a.callWeatherData=a.callWeatherData.bind(Object(u.a)(a)),a.updateSavedCities=a.updateSavedCities.bind(Object(u.a)(a)),a.updateRecentCities=a.updateRecentCities.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"callWeatherData",value:function(e){var t=this,a="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=570a39dcca7a0510c9f57e364bf0fe50");fetch(a).then(function(e){if(!e.ok)throw Error(e.statusText);return e}).then(function(e){return e.json()}).then(function(e){console.log(e);var a={weather:e.weather,city:e.name,country:e.sys.country,temp:e.main.temp,wind:e.wind.speed,windDirection:e.wind.deg};t.setState({weatherData:a,searchDone:!0,errorMessage:""}),t.updateRecentCities(e.name)}).catch(function(e){t.setState({errorMessage:e.message})})}},{key:"updateSavedCities",value:function(e){var t=e.length>0;this.setState({savedCities:e,hasSavedCities:t})}},{key:"updateRecentCities",value:function(e){if(this.state.recentCities.includes(e))return!1;this.setState({recentCities:this.state.recentCities.concat([e])}),this.setState({hasRecentCities:!0});var t=this.state.recentCities;localStorage.setItem("recentList",JSON.stringify(t))}},{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("cityList")||"[]");0!==e.length&&(this.setState({hasSavedCities:!0,savedCities:e}),this.callWeatherData(e[0]));var t=JSON.parse(localStorage.getItem("recentList")||"[]");0!==t.length&&this.setState({hasRecentCities:!0,recentCities:t})}},{key:"render",value:function(){var e=this.state,t=e.searchDone,a=e.weatherData,n=e.hasSavedCities,i=e.savedCities,c=e.errorMessage,s=e.recentCities,o=e.hasRecentCities;return r.a.createElement("div",{className:"App"},r.a.createElement(m,{callBackFromParent:this.callWeatherData,error:c}),t&&r.a.createElement(p,{weatherData:a,savedCities:i,callBackFromParent:this.updateSavedCities}),n&&r.a.createElement(g,{savedCities:i,callBackFromParent:this.callWeatherData}),o&&r.a.createElement(f,{recentCities:s,callBackFromParent:this.callWeatherData}))}}]),t}(n.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-weather-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-weather-app","/service-worker.js");b?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()}},[[285,1,2]]]);
//# sourceMappingURL=main.4cb8a3ed.chunk.js.map