app.controller("WeatherCtrl", function ($scope, $http) {
	$scope.AppModel = {
		getPath: 'http://api.wunderground.com/api/8c1a8ef70cc596b2/conditions/forecast/q/',
		zip: 97205
	};
	
	$scope.GetWeather = function(){
		var request = $scope.AppModel.getPath + $scope.AppModel.zip + '.json';
		$http.get(request).then(function(response){
			//succeeded
			$scope.WeatherUnderground = response.data;
		}, 
		function(response){
			// failed
		});
	};
	
	$scope.GetWeather();
	
/*
  $scope.WeatherUnderground = {
    "response" : {
      "version" : "0.1",
      "termsofService" : "http://www.wunderground.com/weather/api/d/terms.html",
      "features" : {
        "conditions" : 1,
        "forecast" : 1
      }
    },
    "current_observation" : {
      "image" : {
        "url" : "http://icons.wxug.com/graphics/wu2/logo_130x80.png",
        "title" : "Weather Underground",
        "link" : "http://www.wunderground.com"
      },
      "display_location" : {
        "full" : "Portland, OR",
        "city" : "Portland",
        "state" : "OR",
        "state_name" : "Oregon",
        "country" : "US",
        "country_iso3166" : "US",
        "zip" : "97205",
        "magic" : "1",
        "wmo" : "99999",
        "latitude" : "45.52037811",
        "longitude" : "-122.68588257",
        "elevation" : "42.00000000"
      },
      "observation_location" : {
        "full" : "Westerly, NW Portland, Portland, Oregon",
        "city" : "Westerly, NW Portland, Portland",
        "state" : "Oregon",
        "country" : "US",
        "country_iso3166" : "US",
        "latitude" : "45.524315",
        "longitude" : "-122.700302",
        "elevation" : "223 ft"
      },
      "estimated" : {},
      "station_id" : "KORPORTL125",
      "observation_time" : "Last Updated on August 21, 2:31 PM PDT",
      "observation_time_rfc822" : "Fri, 21 Aug 2015 14:31:21 -0700",
      "observation_epoch" : "1440192681",
      "local_time_rfc822" : "Fri, 21 Aug 2015 14:43:33 -0700",
      "local_epoch" : "1440193413",
      "local_tz_short" : "PDT",
      "local_tz_long" : "America/Los_Angeles",
      "local_tz_offset" : "-0700",
      "weather" : "Partly Cloudy",
      "temperature_string" : "71.8 F (22.1 C)",
      "temp_f" : 71.8,
      "temp_c" : 22.1,
      "relative_humidity" : "47%",
      "wind_string" : "Calm",
      "wind_dir" : "NNE",
      "wind_degrees" : 15,
      "wind_mph" : 0,
      "wind_gust_mph" : 0,
      "wind_kph" : 0,
      "wind_gust_kph" : 0,
      "pressure_mb" : "1016",
      "pressure_in" : "30.01",
      "pressure_trend" : "0",
      "dewpoint_string" : "50 F (10 C)",
      "dewpoint_f" : 50,
      "dewpoint_c" : 10,
      "heat_index_string" : "NA",
      "heat_index_f" : "NA",
      "heat_index_c" : "NA",
      "windchill_string" : "NA",
      "windchill_f" : "NA",
      "windchill_c" : "NA",
      "feelslike_string" : "71.8 F (22.1 C)",
      "feelslike_f" : "71.8",
      "feelslike_c" : "22.1",
      "visibility_mi" : "10.0",
      "visibility_km" : "16.1",
      "solarradiation" : "--",
      "UV" : "7",
      "precip_1hr_string" : "-999.00 in ( 0 mm)",
      "precip_1hr_in" : "-999.00",
      "precip_1hr_metric" : " 0",
      "precip_today_string" : "0.00 in (0 mm)",
      "precip_today_in" : "0.00",
      "precip_today_metric" : "0",
      "icon" : "partlycloudy",
      "icon_url" : "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "forecast_url" : "http://www.wunderground.com/US/OR/Portland.html",
      "history_url" : "http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KORPORTL125",
      "ob_url" : "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=45.524315,-122.700302",
      "nowcast" : ""
    },
    "forecast" : {
      "txt_forecast" : {
        "date" : "1:33 PM PDT",
        "forecastday" : [{
            "period" : 0,
            "icon" : "partlycloudy",
            "icon_url" : "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            "title" : "Friday",
            "fcttext" : "Partly cloudy. High 76F. Winds NW at 5 to 10 mph.",
            "fcttext_metric" : "Lots of sunshine. High around 25C. Winds NW at 10 to 15 km/h.", 
            "pop" : "0"
          }, {
            "period" : 1,
            "icon" : "nt_clear",
            "icon_url" : "http://icons.wxug.com/i/c/k/nt_clear.gif",
            "title" : "Friday Night",
            "fcttext" : "Clear skies. Low 52F. Winds NNW at 5 to 10 mph.",
            "fcttext_metric" : "Clear skies. Low 11C. Winds NNW at 10 to 15 km/h.",
            "pop" : "0"
          }, {
            "period" : 2,
            "icon" : "clear",
            "icon_url" : "http://icons.wxug.com/i/c/k/clear.gif",
            "title" : "Saturday",
            "fcttext" : "A mainly sunny sky. High 89F. Winds NNE at 10 to 15 mph.",
            "fcttext_metric" : "Sunny. High 32C. Winds NNE at 15 to 25 km/h.",
            "pop" : "0"
          }, {
            "period" : 3,
            "icon" : "nt_clear",
            "icon_url" : "http://icons.wxug.com/i/c/k/nt_clear.gif",
            "title" : "Saturday Night",
            "fcttext" : "Clear skies. Low 59F. Winds N at 5 to 10 mph.",
            "fcttext_metric" : "Clear. Low around 15C. Winds N at 10 to 15 km/h.",
            "pop" : "0"
          }, {
            "period" : 4,
            "icon" : "clear",
            "icon_url" : "http://icons.wxug.com/i/c/k/clear.gif",
            "title" : "Sunday",
            "fcttext" : "Sunny. High near 90F. Winds NNW at 5 to 10 mph.",
            "fcttext_metric" : "Sunny. High 32C. Winds NNW at 10 to 15 km/h.",
            "pop" : "0"
          }, {
            "period" : 5,
            "icon" : "nt_partlycloudy",
            "icon_url" : "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
            "title" : "Sunday Night",
            "fcttext" : "Partly cloudy skies. Low around 55F. Winds NW at 5 to 10 mph.",
            "fcttext_metric" : "Partly cloudy skies. Low 13C. Winds NW at 10 to 15 km/h.",
            "pop" : "0"
          }, {
            "period" : 6,
            "icon" : "partlycloudy",
            "icon_url" : "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            "title" : "Monday",
            "fcttext" : "Partly cloudy skies. High 83F. Winds NNW at 5 to 10 mph.",
            "fcttext_metric" : "Intervals of clouds and sunshine. High 28C. Winds NNW at 10 to 15 km/h.",
            "pop" : "0"
          }, {
            "period" : 7,
            "icon" : "nt_clear",
            "icon_url" : "http://icons.wxug.com/i/c/k/nt_clear.gif",
            "title" : "Monday Night",
            "fcttext" : "A mostly clear sky. Low 52F. Winds NW at 5 to 10 mph.",
            "fcttext_metric" : "Clear skies. Low 11C. Winds NW at 10 to 15 km/h.",
            "pop" : "0"
          }
        ]
      },
      "simpleforecast" : {
        "forecastday" : [{
            "date" : {
              "epoch" : "1440208800",
              "pretty" : "7:00 PM PDT on August 21, 2015",
              "day" : 21,
              "month" : 8,
              "year" : 2015,
              "yday" : 232,
              "hour" : 19,
              "min" : "00",
              "sec" : 0,
              "isdst" : "1",
              "monthname" : "August",
              "monthname_short" : "Aug",
              "weekday_short" : "Fri",
              "weekday" : "Friday",
              "ampm" : "PM",
              "tz_short" : "PDT",
              "tz_long" : "America/Los_Angeles"
            },
            "period" : 1,
            "high" : {
              "fahrenheit" : "76",
              "celsius" : "24"
            },
            "low" : {
              "fahrenheit" : "52",
              "celsius" : "11"
            },
            "conditions" : "Partly Cloudy",
            "icon" : "partlycloudy",
            "icon_url" : "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            "skyicon" : "",
            "pop" : 0,
            "qpf_allday" : {
              "in" : 0,
              "mm" : 0
            },
            "qpf_day" : {
              "in" : 0,
              "mm" : 0
            },
            "qpf_night" : {
              "in" : 0,
              "mm" : 0
            },
            "snow_allday" : {
              "in" : 0,
              "cm" : 0
            },
            "snow_day" : {
              "in" : 0,
              "cm" : 0
            },
            "snow_night" : {
              "in" : 0,
              "cm" : 0
            },
            "maxwind" : {
              "mph" : 10,
              "kph" : 16,
              "dir" : "NW",
              "degrees" : 323
            },
            "avewind" : {
              "mph" : 8,
              "kph" : 13,
              "dir" : "NW",
              "degrees" : 323
            },
            "avehumidity" : 35,
            "maxhumidity" : 0,
            "minhumidity" : 0
          }, {
            "date" : {
              "epoch" : "1440295200",
              "pretty" : "7:00 PM PDT on August 22, 2015",
              "day" : 22,
              "month" : 8,
              "year" : 2015,
              "yday" : 233,
              "hour" : 19,
              "min" : "00",
              "sec" : 0,
              "isdst" : "1",
              "monthname" : "August",
              "monthname_short" : "Aug",
              "weekday_short" : "Sat",
              "weekday" : "Saturday",
              "ampm" : "PM",
              "tz_short" : "PDT",
              "tz_long" : "America/Los_Angeles"
            },
            "period" : 2,
            "high" : {
              "fahrenheit" : "89",
              "celsius" : "32"
            },
            "low" : {
              "fahrenheit" : "59",
              "celsius" : "15"
            },
            "conditions" : "Clear",
            "icon" : "clear",
            "icon_url" : "http://icons.wxug.com/i/c/k/clear.gif",
            "skyicon" : "",
            "pop" : 0,
            "qpf_allday" : {
              "in" : 0,
              "mm" : 0
            },
            "qpf_day" : {
              "in" : 0,
              "mm" : 0
            },
            "qpf_night" : {
              "in" : 0,
              "mm" : 0
            },
            "snow_allday" : {
              "in" : 0,
              "cm" : 0
            },
            "snow_day" : {
              "in" : 0,
              "cm" : 0
            },
            "snow_night" : {
              "in" : 0,
              "cm" : 0
            },
            "maxwind" : {
              "mph" : 15,
              "kph" : 24,
              "dir" : "NNE",
              "degrees" : 29
            },
            "avewind" : {
              "mph" : 11,
              "kph" : 18,
              "dir" : "NNE",
              "degrees" : 29
            },
            "avehumidity" : 38,
            "maxhumidity" : 0,
            "minhumidity" : 0
          }, {
            "date" : {
              "epoch" : "1440381600",
              "pretty" : "7:00 PM PDT on August 23, 2015",
              "day" : 23,
              "month" : 8,
              "year" : 2015,
              "yday" : 234,
              "hour" : 19,
              "min" : "00",
              "sec" : 0,
              "isdst" : "1",
              "monthname" : "August",
              "monthname_short" : "Aug",
              "weekday_short" : "Sun",
              "weekday" : "Sunday",
              "ampm" : "PM",
              "tz_short" : "PDT",
              "tz_long" : "America/Los_Angeles"
            },
            "period" : 3,
            "high" : {
              "fahrenheit" : "90",
              "celsius" : "32"
            },
            "low" : {
              "fahrenheit" : "55",
              "celsius" : "13"
            },
            "conditions" : "Clear",
            "icon" : "clear",
            "icon_url" : "http://icons.wxug.com/i/c/k/clear.gif",
            "skyicon" : "",
            "pop" : 0,
            "qpf_allday" : {
              "in" : 0,
              "mm" : 0
            },
            "qpf_day" : {
              "in" : 0,
              "mm" : 0
            },
            "qpf_night" : {
              "in" : 0,
              "mm" : 0
            },
            "snow_allday" : {
              "in" : 0,
              "cm" : 0
            },
            "snow_day" : {
              "in" : 0,
              "cm" : 0
            },
            "snow_night" : {
              "in" : 0,
              "cm" : 0
            },
            "maxwind" : {
              "mph" : 10,
              "kph" : 16,
              "dir" : "NNW",
              "degrees" : 335
            },
            "avewind" : {
              "mph" : 9,
              "kph" : 14,
              "dir" : "NNW",
              "degrees" : 335
            },
            "avehumidity" : 34,
            "maxhumidity" : 0,
            "minhumidity" : 0
          }, {
            "date" : {
              "epoch" : "1440468000",
              "pretty" : "7:00 PM PDT on August 24, 2015",
              "day" : 24,
              "month" : 8,
              "year" : 2015,
              "yday" : 235,
              "hour" : 19,
              "min" : "00",
              "sec" : 0,
              "isdst" : "1",
              "monthname" : "August",
              "monthname_short" : "Aug",
              "weekday_short" : "Mon",
              "weekday" : "Monday",
              "ampm" : "PM",
              "tz_short" : "PDT",
              "tz_long" : "America/Los_Angeles"
            },
            "period" : 4,
            "high" : {
              "fahrenheit" : "83",
              "celsius" : "28"
            },
            "low" : {
              "fahrenheit" : "52",
              "celsius" : "11"
            },
            "conditions" : "Partly Cloudy",
            "icon" : "partlycloudy",
            "icon_url" : "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            "skyicon" : "",
            "pop" : 0,
            "qpf_allday" : {
              "in" : 0,
              "mm" : 0
            },
            "qpf_day" : {
              "in" : 0,
              "mm" : 0
            },
            "qpf_night" : {
              "in" : 0,
              "mm" : 0
            },
            "snow_allday" : {
              "in" : 0,
              "cm" : 0
            },
            "snow_day" : {
              "in" : 0,
              "cm" : 0
            },
            "snow_night" : {
              "in" : 0,
              "cm" : 0
            },
            "maxwind" : {
              "mph" : 10,
              "kph" : 16,
              "dir" : "NNW",
              "degrees" : 336
            },
            "avewind" : {
              "mph" : 9,
              "kph" : 14,
              "dir" : "NNW",
              "degrees" : 336
            },
            "avehumidity" : 41,
            "maxhumidity" : 0,
            "minhumidity" : 0
          }
        ]
      }
    }
  };
  */
});
