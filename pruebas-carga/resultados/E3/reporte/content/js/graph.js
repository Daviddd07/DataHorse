/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 225.0, "minX": 0.0, "maxY": 5019.0, "series": [{"data": [[0.0, 225.0], [0.1, 225.0], [0.2, 225.0], [0.3, 225.0], [0.4, 225.0], [0.5, 342.0], [0.6, 342.0], [0.7, 342.0], [0.8, 342.0], [0.9, 342.0], [1.0, 362.0], [1.1, 362.0], [1.2, 362.0], [1.3, 362.0], [1.4, 362.0], [1.5, 399.0], [1.6, 399.0], [1.7, 399.0], [1.8, 399.0], [1.9, 399.0], [2.0, 420.0], [2.1, 420.0], [2.2, 420.0], [2.3, 420.0], [2.4, 420.0], [2.5, 460.0], [2.6, 460.0], [2.7, 460.0], [2.8, 460.0], [2.9, 460.0], [3.0, 483.0], [3.1, 483.0], [3.2, 483.0], [3.3, 483.0], [3.4, 483.0], [3.5, 638.0], [3.6, 638.0], [3.7, 638.0], [3.8, 638.0], [3.9, 638.0], [4.0, 649.0], [4.1, 649.0], [4.2, 649.0], [4.3, 649.0], [4.4, 649.0], [4.5, 678.0], [4.6, 678.0], [4.7, 678.0], [4.8, 678.0], [4.9, 678.0], [5.0, 693.0], [5.1, 693.0], [5.2, 693.0], [5.3, 693.0], [5.4, 693.0], [5.5, 798.0], [5.6, 798.0], [5.7, 798.0], [5.8, 798.0], [5.9, 798.0], [6.0, 887.0], [6.1, 887.0], [6.2, 887.0], [6.3, 887.0], [6.4, 887.0], [6.5, 983.0], [6.6, 983.0], [6.7, 983.0], [6.8, 983.0], [6.9, 983.0], [7.0, 1069.0], [7.1, 1069.0], [7.2, 1069.0], [7.3, 1069.0], [7.4, 1069.0], [7.5, 1084.0], [7.6, 1084.0], [7.7, 1084.0], [7.8, 1084.0], [7.9, 1084.0], [8.0, 1089.0], [8.1, 1089.0], [8.2, 1089.0], [8.3, 1089.0], [8.4, 1089.0], [8.5, 1123.0], [8.6, 1123.0], [8.7, 1123.0], [8.8, 1123.0], [8.9, 1123.0], [9.0, 1142.0], [9.1, 1142.0], [9.2, 1142.0], [9.3, 1142.0], [9.4, 1142.0], [9.5, 1168.0], [9.6, 1168.0], [9.7, 1168.0], [9.8, 1168.0], [9.9, 1168.0], [10.0, 1169.0], [10.1, 1169.0], [10.2, 1169.0], [10.3, 1169.0], [10.4, 1169.0], [10.5, 1193.0], [10.6, 1193.0], [10.7, 1193.0], [10.8, 1193.0], [10.9, 1193.0], [11.0, 1218.0], [11.1, 1218.0], [11.2, 1218.0], [11.3, 1218.0], [11.4, 1218.0], [11.5, 1219.0], [11.6, 1219.0], [11.7, 1219.0], [11.8, 1219.0], [11.9, 1219.0], [12.0, 1246.0], [12.1, 1246.0], [12.2, 1246.0], [12.3, 1246.0], [12.4, 1246.0], [12.5, 1252.0], [12.6, 1252.0], [12.7, 1252.0], [12.8, 1252.0], [12.9, 1252.0], [13.0, 1291.0], [13.1, 1291.0], [13.2, 1291.0], [13.3, 1291.0], [13.4, 1291.0], [13.5, 1298.0], [13.6, 1298.0], [13.7, 1298.0], [13.8, 1298.0], [13.9, 1298.0], [14.0, 1302.0], [14.1, 1302.0], [14.2, 1302.0], [14.3, 1302.0], [14.4, 1302.0], [14.5, 1303.0], [14.6, 1303.0], [14.7, 1303.0], [14.8, 1303.0], [14.9, 1303.0], [15.0, 1331.0], [15.1, 1331.0], [15.2, 1331.0], [15.3, 1331.0], [15.4, 1331.0], [15.5, 1340.0], [15.6, 1340.0], [15.7, 1340.0], [15.8, 1340.0], [15.9, 1340.0], [16.0, 1343.0], [16.1, 1343.0], [16.2, 1343.0], [16.3, 1343.0], [16.4, 1343.0], [16.5, 1345.0], [16.6, 1345.0], [16.7, 1345.0], [16.8, 1345.0], [16.9, 1345.0], [17.0, 1356.0], [17.1, 1356.0], [17.2, 1356.0], [17.3, 1356.0], [17.4, 1356.0], [17.5, 1364.0], [17.6, 1364.0], [17.7, 1364.0], [17.8, 1364.0], [17.9, 1364.0], [18.0, 1367.0], [18.1, 1367.0], [18.2, 1367.0], [18.3, 1367.0], [18.4, 1367.0], [18.5, 1373.0], [18.6, 1373.0], [18.7, 1373.0], [18.8, 1373.0], [18.9, 1373.0], [19.0, 1404.0], [19.1, 1404.0], [19.2, 1404.0], [19.3, 1404.0], [19.4, 1404.0], [19.5, 1447.0], [19.6, 1447.0], [19.7, 1447.0], [19.8, 1447.0], [19.9, 1447.0], [20.0, 1459.0], [20.1, 1459.0], [20.2, 1459.0], [20.3, 1459.0], [20.4, 1459.0], [20.5, 1482.0], [20.6, 1482.0], [20.7, 1482.0], [20.8, 1482.0], [20.9, 1482.0], [21.0, 1508.0], [21.1, 1508.0], [21.2, 1508.0], [21.3, 1508.0], [21.4, 1508.0], [21.5, 1508.0], [21.6, 1508.0], [21.7, 1508.0], [21.8, 1508.0], [21.9, 1508.0], [22.0, 1525.0], [22.1, 1525.0], [22.2, 1525.0], [22.3, 1525.0], [22.4, 1525.0], [22.5, 1530.0], [22.6, 1530.0], [22.7, 1530.0], [22.8, 1530.0], [22.9, 1530.0], [23.0, 1552.0], [23.1, 1552.0], [23.2, 1552.0], [23.3, 1552.0], [23.4, 1552.0], [23.5, 1559.0], [23.6, 1559.0], [23.7, 1559.0], [23.8, 1559.0], [23.9, 1559.0], [24.0, 1566.0], [24.1, 1566.0], [24.2, 1566.0], [24.3, 1566.0], [24.4, 1566.0], [24.5, 1572.0], [24.6, 1572.0], [24.7, 1572.0], [24.8, 1572.0], [24.9, 1572.0], [25.0, 1584.0], [25.1, 1584.0], [25.2, 1584.0], [25.3, 1584.0], [25.4, 1584.0], [25.5, 1607.0], [25.6, 1607.0], [25.7, 1607.0], [25.8, 1607.0], [25.9, 1607.0], [26.0, 1622.0], [26.1, 1622.0], [26.2, 1622.0], [26.3, 1622.0], [26.4, 1622.0], [26.5, 1625.0], [26.6, 1625.0], [26.7, 1625.0], [26.8, 1625.0], [26.9, 1625.0], [27.0, 1639.0], [27.1, 1639.0], [27.2, 1639.0], [27.3, 1639.0], [27.4, 1639.0], [27.5, 1643.0], [27.6, 1643.0], [27.7, 1643.0], [27.8, 1643.0], [27.9, 1643.0], [28.0, 1654.0], [28.1, 1654.0], [28.2, 1654.0], [28.3, 1654.0], [28.4, 1654.0], [28.5, 1665.0], [28.6, 1665.0], [28.7, 1665.0], [28.8, 1665.0], [28.9, 1665.0], [29.0, 1747.0], [29.1, 1747.0], [29.2, 1747.0], [29.3, 1747.0], [29.4, 1747.0], [29.5, 1757.0], [29.6, 1757.0], [29.7, 1757.0], [29.8, 1757.0], [29.9, 1757.0], [30.0, 1784.0], [30.1, 1784.0], [30.2, 1784.0], [30.3, 1784.0], [30.4, 1784.0], [30.5, 1793.0], [30.6, 1793.0], [30.7, 1793.0], [30.8, 1793.0], [30.9, 1793.0], [31.0, 1815.0], [31.1, 1815.0], [31.2, 1815.0], [31.3, 1815.0], [31.4, 1815.0], [31.5, 1817.0], [31.6, 1817.0], [31.7, 1817.0], [31.8, 1817.0], [31.9, 1817.0], [32.0, 1821.0], [32.1, 1821.0], [32.2, 1821.0], [32.3, 1821.0], [32.4, 1821.0], [32.5, 1830.0], [32.6, 1830.0], [32.7, 1830.0], [32.8, 1830.0], [32.9, 1830.0], [33.0, 1867.0], [33.1, 1867.0], [33.2, 1867.0], [33.3, 1867.0], [33.4, 1867.0], [33.5, 1888.0], [33.6, 1888.0], [33.7, 1888.0], [33.8, 1888.0], [33.9, 1888.0], [34.0, 1908.0], [34.1, 1908.0], [34.2, 1908.0], [34.3, 1908.0], [34.4, 1908.0], [34.5, 1914.0], [34.6, 1914.0], [34.7, 1914.0], [34.8, 1914.0], [34.9, 1914.0], [35.0, 1923.0], [35.1, 1923.0], [35.2, 1923.0], [35.3, 1923.0], [35.4, 1923.0], [35.5, 1926.0], [35.6, 1926.0], [35.7, 1926.0], [35.8, 1926.0], [35.9, 1926.0], [36.0, 1938.0], [36.1, 1938.0], [36.2, 1938.0], [36.3, 1938.0], [36.4, 1938.0], [36.5, 1938.0], [36.6, 1938.0], [36.7, 1938.0], [36.8, 1938.0], [36.9, 1938.0], [37.0, 1945.0], [37.1, 1945.0], [37.2, 1945.0], [37.3, 1945.0], [37.4, 1945.0], [37.5, 1947.0], [37.6, 1947.0], [37.7, 1947.0], [37.8, 1947.0], [37.9, 1947.0], [38.0, 1953.0], [38.1, 1953.0], [38.2, 1953.0], [38.3, 1953.0], [38.4, 1953.0], [38.5, 1986.0], [38.6, 1986.0], [38.7, 1986.0], [38.8, 1986.0], [38.9, 1986.0], [39.0, 2017.0], [39.1, 2017.0], [39.2, 2017.0], [39.3, 2017.0], [39.4, 2017.0], [39.5, 2017.0], [39.6, 2017.0], [39.7, 2017.0], [39.8, 2017.0], [39.9, 2017.0], [40.0, 2021.0], [40.1, 2021.0], [40.2, 2021.0], [40.3, 2021.0], [40.4, 2021.0], [40.5, 2038.0], [40.6, 2038.0], [40.7, 2038.0], [40.8, 2038.0], [40.9, 2038.0], [41.0, 2064.0], [41.1, 2064.0], [41.2, 2064.0], [41.3, 2064.0], [41.4, 2064.0], [41.5, 2067.0], [41.6, 2067.0], [41.7, 2067.0], [41.8, 2067.0], [41.9, 2067.0], [42.0, 2108.0], [42.1, 2108.0], [42.2, 2108.0], [42.3, 2108.0], [42.4, 2108.0], [42.5, 2125.0], [42.6, 2125.0], [42.7, 2125.0], [42.8, 2125.0], [42.9, 2125.0], [43.0, 2167.0], [43.1, 2167.0], [43.2, 2167.0], [43.3, 2167.0], [43.4, 2167.0], [43.5, 2185.0], [43.6, 2185.0], [43.7, 2185.0], [43.8, 2185.0], [43.9, 2185.0], [44.0, 2208.0], [44.1, 2208.0], [44.2, 2208.0], [44.3, 2208.0], [44.4, 2208.0], [44.5, 2223.0], [44.6, 2223.0], [44.7, 2223.0], [44.8, 2223.0], [44.9, 2223.0], [45.0, 2228.0], [45.1, 2228.0], [45.2, 2228.0], [45.3, 2228.0], [45.4, 2228.0], [45.5, 2297.0], [45.6, 2297.0], [45.7, 2297.0], [45.8, 2297.0], [45.9, 2297.0], [46.0, 2328.0], [46.1, 2328.0], [46.2, 2328.0], [46.3, 2328.0], [46.4, 2328.0], [46.5, 2366.0], [46.6, 2366.0], [46.7, 2366.0], [46.8, 2366.0], [46.9, 2366.0], [47.0, 2401.0], [47.1, 2401.0], [47.2, 2401.0], [47.3, 2401.0], [47.4, 2401.0], [47.5, 2412.0], [47.6, 2412.0], [47.7, 2412.0], [47.8, 2412.0], [47.9, 2412.0], [48.0, 2418.0], [48.1, 2418.0], [48.2, 2418.0], [48.3, 2418.0], [48.4, 2418.0], [48.5, 2433.0], [48.6, 2433.0], [48.7, 2433.0], [48.8, 2433.0], [48.9, 2433.0], [49.0, 2439.0], [49.1, 2439.0], [49.2, 2439.0], [49.3, 2439.0], [49.4, 2439.0], [49.5, 2447.0], [49.6, 2447.0], [49.7, 2447.0], [49.8, 2447.0], [49.9, 2447.0], [50.0, 2465.0], [50.1, 2465.0], [50.2, 2465.0], [50.3, 2465.0], [50.4, 2465.0], [50.5, 2494.0], [50.6, 2494.0], [50.7, 2494.0], [50.8, 2494.0], [50.9, 2494.0], [51.0, 2510.0], [51.1, 2510.0], [51.2, 2510.0], [51.3, 2510.0], [51.4, 2510.0], [51.5, 2524.0], [51.6, 2524.0], [51.7, 2524.0], [51.8, 2524.0], [51.9, 2524.0], [52.0, 2527.0], [52.1, 2527.0], [52.2, 2527.0], [52.3, 2527.0], [52.4, 2527.0], [52.5, 2560.0], [52.6, 2560.0], [52.7, 2560.0], [52.8, 2560.0], [52.9, 2560.0], [53.0, 2575.0], [53.1, 2575.0], [53.2, 2575.0], [53.3, 2575.0], [53.4, 2575.0], [53.5, 2598.0], [53.6, 2598.0], [53.7, 2598.0], [53.8, 2598.0], [53.9, 2598.0], [54.0, 2613.0], [54.1, 2613.0], [54.2, 2613.0], [54.3, 2613.0], [54.4, 2613.0], [54.5, 2620.0], [54.6, 2620.0], [54.7, 2620.0], [54.8, 2620.0], [54.9, 2620.0], [55.0, 2625.0], [55.1, 2625.0], [55.2, 2625.0], [55.3, 2625.0], [55.4, 2625.0], [55.5, 2628.0], [55.6, 2628.0], [55.7, 2628.0], [55.8, 2628.0], [55.9, 2628.0], [56.0, 2632.0], [56.1, 2632.0], [56.2, 2632.0], [56.3, 2632.0], [56.4, 2632.0], [56.5, 2641.0], [56.6, 2641.0], [56.7, 2641.0], [56.8, 2641.0], [56.9, 2641.0], [57.0, 2662.0], [57.1, 2662.0], [57.2, 2662.0], [57.3, 2662.0], [57.4, 2662.0], [57.5, 2666.0], [57.6, 2666.0], [57.7, 2666.0], [57.8, 2666.0], [57.9, 2666.0], [58.0, 2692.0], [58.1, 2692.0], [58.2, 2692.0], [58.3, 2692.0], [58.4, 2692.0], [58.5, 2716.0], [58.6, 2716.0], [58.7, 2716.0], [58.8, 2716.0], [58.9, 2716.0], [59.0, 2716.0], [59.1, 2716.0], [59.2, 2716.0], [59.3, 2716.0], [59.4, 2716.0], [59.5, 2732.0], [59.6, 2732.0], [59.7, 2732.0], [59.8, 2732.0], [59.9, 2732.0], [60.0, 2733.0], [60.1, 2733.0], [60.2, 2733.0], [60.3, 2733.0], [60.4, 2733.0], [60.5, 2733.0], [60.6, 2733.0], [60.7, 2733.0], [60.8, 2733.0], [60.9, 2733.0], [61.0, 2741.0], [61.1, 2741.0], [61.2, 2741.0], [61.3, 2741.0], [61.4, 2741.0], [61.5, 2749.0], [61.6, 2749.0], [61.7, 2749.0], [61.8, 2749.0], [61.9, 2749.0], [62.0, 2753.0], [62.1, 2753.0], [62.2, 2753.0], [62.3, 2753.0], [62.4, 2753.0], [62.5, 2759.0], [62.6, 2759.0], [62.7, 2759.0], [62.8, 2759.0], [62.9, 2759.0], [63.0, 2771.0], [63.1, 2771.0], [63.2, 2771.0], [63.3, 2771.0], [63.4, 2771.0], [63.5, 2790.0], [63.6, 2790.0], [63.7, 2790.0], [63.8, 2790.0], [63.9, 2790.0], [64.0, 2815.0], [64.1, 2815.0], [64.2, 2815.0], [64.3, 2815.0], [64.4, 2815.0], [64.5, 2818.0], [64.6, 2818.0], [64.7, 2818.0], [64.8, 2818.0], [64.9, 2818.0], [65.0, 2821.0], [65.1, 2821.0], [65.2, 2821.0], [65.3, 2821.0], [65.4, 2821.0], [65.5, 2847.0], [65.6, 2847.0], [65.7, 2847.0], [65.8, 2847.0], [65.9, 2847.0], [66.0, 2871.0], [66.1, 2871.0], [66.2, 2871.0], [66.3, 2871.0], [66.4, 2871.0], [66.5, 2884.0], [66.6, 2884.0], [66.7, 2884.0], [66.8, 2884.0], [66.9, 2884.0], [67.0, 2886.0], [67.1, 2886.0], [67.2, 2886.0], [67.3, 2886.0], [67.4, 2886.0], [67.5, 2897.0], [67.6, 2897.0], [67.7, 2897.0], [67.8, 2897.0], [67.9, 2897.0], [68.0, 2928.0], [68.1, 2928.0], [68.2, 2928.0], [68.3, 2928.0], [68.4, 2928.0], [68.5, 2937.0], [68.6, 2937.0], [68.7, 2937.0], [68.8, 2937.0], [68.9, 2937.0], [69.0, 2941.0], [69.1, 2941.0], [69.2, 2941.0], [69.3, 2941.0], [69.4, 2941.0], [69.5, 2943.0], [69.6, 2943.0], [69.7, 2943.0], [69.8, 2943.0], [69.9, 2943.0], [70.0, 2945.0], [70.1, 2945.0], [70.2, 2945.0], [70.3, 2945.0], [70.4, 2945.0], [70.5, 2953.0], [70.6, 2953.0], [70.7, 2953.0], [70.8, 2953.0], [70.9, 2953.0], [71.0, 2960.0], [71.1, 2960.0], [71.2, 2960.0], [71.3, 2960.0], [71.4, 2960.0], [71.5, 2977.0], [71.6, 2977.0], [71.7, 2977.0], [71.8, 2977.0], [71.9, 2977.0], [72.0, 2997.0], [72.1, 2997.0], [72.2, 2997.0], [72.3, 2997.0], [72.4, 2997.0], [72.5, 3016.0], [72.6, 3016.0], [72.7, 3016.0], [72.8, 3016.0], [72.9, 3016.0], [73.0, 3032.0], [73.1, 3032.0], [73.2, 3032.0], [73.3, 3032.0], [73.4, 3032.0], [73.5, 3038.0], [73.6, 3038.0], [73.7, 3038.0], [73.8, 3038.0], [73.9, 3038.0], [74.0, 3074.0], [74.1, 3074.0], [74.2, 3074.0], [74.3, 3074.0], [74.4, 3074.0], [74.5, 3097.0], [74.6, 3097.0], [74.7, 3097.0], [74.8, 3097.0], [74.9, 3097.0], [75.0, 3125.0], [75.1, 3125.0], [75.2, 3125.0], [75.3, 3125.0], [75.4, 3125.0], [75.5, 3162.0], [75.6, 3162.0], [75.7, 3162.0], [75.8, 3162.0], [75.9, 3162.0], [76.0, 3167.0], [76.1, 3167.0], [76.2, 3167.0], [76.3, 3167.0], [76.4, 3167.0], [76.5, 3177.0], [76.6, 3177.0], [76.7, 3177.0], [76.8, 3177.0], [76.9, 3177.0], [77.0, 3180.0], [77.1, 3180.0], [77.2, 3180.0], [77.3, 3180.0], [77.4, 3180.0], [77.5, 3186.0], [77.6, 3186.0], [77.7, 3186.0], [77.8, 3186.0], [77.9, 3186.0], [78.0, 3258.0], [78.1, 3258.0], [78.2, 3258.0], [78.3, 3258.0], [78.4, 3258.0], [78.5, 3267.0], [78.6, 3267.0], [78.7, 3267.0], [78.8, 3267.0], [78.9, 3267.0], [79.0, 3276.0], [79.1, 3276.0], [79.2, 3276.0], [79.3, 3276.0], [79.4, 3276.0], [79.5, 3277.0], [79.6, 3277.0], [79.7, 3277.0], [79.8, 3277.0], [79.9, 3277.0], [80.0, 3282.0], [80.1, 3282.0], [80.2, 3282.0], [80.3, 3282.0], [80.4, 3282.0], [80.5, 3318.0], [80.6, 3318.0], [80.7, 3318.0], [80.8, 3318.0], [80.9, 3318.0], [81.0, 3341.0], [81.1, 3341.0], [81.2, 3341.0], [81.3, 3341.0], [81.4, 3341.0], [81.5, 3352.0], [81.6, 3352.0], [81.7, 3352.0], [81.8, 3352.0], [81.9, 3352.0], [82.0, 3356.0], [82.1, 3356.0], [82.2, 3356.0], [82.3, 3356.0], [82.4, 3356.0], [82.5, 3364.0], [82.6, 3364.0], [82.7, 3364.0], [82.8, 3364.0], [82.9, 3364.0], [83.0, 3380.0], [83.1, 3380.0], [83.2, 3380.0], [83.3, 3380.0], [83.4, 3380.0], [83.5, 3399.0], [83.6, 3399.0], [83.7, 3399.0], [83.8, 3399.0], [83.9, 3399.0], [84.0, 3403.0], [84.1, 3403.0], [84.2, 3403.0], [84.3, 3403.0], [84.4, 3403.0], [84.5, 3405.0], [84.6, 3405.0], [84.7, 3405.0], [84.8, 3405.0], [84.9, 3405.0], [85.0, 3407.0], [85.1, 3407.0], [85.2, 3407.0], [85.3, 3407.0], [85.4, 3407.0], [85.5, 3444.0], [85.6, 3444.0], [85.7, 3444.0], [85.8, 3444.0], [85.9, 3444.0], [86.0, 3454.0], [86.1, 3454.0], [86.2, 3454.0], [86.3, 3454.0], [86.4, 3454.0], [86.5, 3470.0], [86.6, 3470.0], [86.7, 3470.0], [86.8, 3470.0], [86.9, 3470.0], [87.0, 3517.0], [87.1, 3517.0], [87.2, 3517.0], [87.3, 3517.0], [87.4, 3517.0], [87.5, 3537.0], [87.6, 3537.0], [87.7, 3537.0], [87.8, 3537.0], [87.9, 3537.0], [88.0, 3547.0], [88.1, 3547.0], [88.2, 3547.0], [88.3, 3547.0], [88.4, 3547.0], [88.5, 3565.0], [88.6, 3565.0], [88.7, 3565.0], [88.8, 3565.0], [88.9, 3565.0], [89.0, 3600.0], [89.1, 3600.0], [89.2, 3600.0], [89.3, 3600.0], [89.4, 3600.0], [89.5, 3617.0], [89.6, 3617.0], [89.7, 3617.0], [89.8, 3617.0], [89.9, 3617.0], [90.0, 3620.0], [90.1, 3620.0], [90.2, 3620.0], [90.3, 3620.0], [90.4, 3620.0], [90.5, 3654.0], [90.6, 3654.0], [90.7, 3654.0], [90.8, 3654.0], [90.9, 3654.0], [91.0, 3665.0], [91.1, 3665.0], [91.2, 3665.0], [91.3, 3665.0], [91.4, 3665.0], [91.5, 3703.0], [91.6, 3703.0], [91.7, 3703.0], [91.8, 3703.0], [91.9, 3703.0], [92.0, 3736.0], [92.1, 3736.0], [92.2, 3736.0], [92.3, 3736.0], [92.4, 3736.0], [92.5, 3754.0], [92.6, 3754.0], [92.7, 3754.0], [92.8, 3754.0], [92.9, 3754.0], [93.0, 3755.0], [93.1, 3755.0], [93.2, 3755.0], [93.3, 3755.0], [93.4, 3755.0], [93.5, 3757.0], [93.6, 3757.0], [93.7, 3757.0], [93.8, 3757.0], [93.9, 3757.0], [94.0, 3851.0], [94.1, 3851.0], [94.2, 3851.0], [94.3, 3851.0], [94.4, 3851.0], [94.5, 3947.0], [94.6, 3947.0], [94.7, 3947.0], [94.8, 3947.0], [94.9, 3947.0], [95.0, 3993.0], [95.1, 3993.0], [95.2, 3993.0], [95.3, 3993.0], [95.4, 3993.0], [95.5, 3997.0], [95.6, 3997.0], [95.7, 3997.0], [95.8, 3997.0], [95.9, 3997.0], [96.0, 4018.0], [96.1, 4018.0], [96.2, 4018.0], [96.3, 4018.0], [96.4, 4018.0], [96.5, 4067.0], [96.6, 4067.0], [96.7, 4067.0], [96.8, 4067.0], [96.9, 4067.0], [97.0, 4126.0], [97.1, 4126.0], [97.2, 4126.0], [97.3, 4126.0], [97.4, 4126.0], [97.5, 4217.0], [97.6, 4217.0], [97.7, 4217.0], [97.8, 4217.0], [97.9, 4217.0], [98.0, 4236.0], [98.1, 4236.0], [98.2, 4236.0], [98.3, 4236.0], [98.4, 4236.0], [98.5, 4284.0], [98.6, 4284.0], [98.7, 4284.0], [98.8, 4284.0], [98.9, 4284.0], [99.0, 4319.0], [99.1, 4319.0], [99.2, 4319.0], [99.3, 4319.0], [99.4, 4319.0], [99.5, 5019.0], [99.6, 5019.0], [99.7, 5019.0], [99.8, 5019.0], [99.9, 5019.0]], "isOverall": false, "label": "POST /auth/register", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 11.0, "series": [{"data": [[600.0, 4.0], [700.0, 1.0], [800.0, 1.0], [900.0, 1.0], [1000.0, 3.0], [1100.0, 5.0], [1200.0, 6.0], [1300.0, 10.0], [1400.0, 4.0], [1500.0, 9.0], [1600.0, 7.0], [1700.0, 4.0], [1800.0, 6.0], [1900.0, 10.0], [2000.0, 6.0], [2100.0, 4.0], [2300.0, 2.0], [2200.0, 4.0], [2400.0, 8.0], [2500.0, 6.0], [2600.0, 9.0], [2800.0, 8.0], [2700.0, 11.0], [2900.0, 9.0], [3000.0, 5.0], [3100.0, 6.0], [200.0, 1.0], [3200.0, 5.0], [3300.0, 7.0], [3400.0, 6.0], [3500.0, 4.0], [3700.0, 5.0], [3600.0, 5.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 2.0], [4200.0, 3.0], [4300.0, 1.0], [4100.0, 1.0], [300.0, 3.0], [5000.0, 1.0], [400.0, 3.0]], "isOverall": false, "label": "POST /auth/register", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 158.0, "series": [{"data": [[0.0, 7.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 35.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 158.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 24.229999999999997, "minX": 1.7944116E12, "maxY": 24.229999999999997, "series": [{"data": [[1.7944116E12, 24.229999999999997]], "isOverall": false, "label": "Usuarios concurrentes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7944116E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 328.6666666666667, "minX": 1.0, "maxY": 3598.5, "series": [{"data": [[2.0, 328.6666666666667], [32.0, 2510.6], [33.0, 3598.5], [34.0, 3313.0], [35.0, 3139.375], [36.0, 3489.7142857142853], [37.0, 3251.3333333333335], [3.0, 649.0], [4.0, 510.25], [5.0, 798.0], [6.0, 638.0], [7.0, 693.0], [8.0, 887.0], [9.0, 1225.4], [10.0, 1290.4], [11.0, 1372.4], [12.0, 1446.25], [13.0, 1219.5], [14.0, 1568.5], [15.0, 1375.75], [16.0, 1390.25], [1.0, 342.0], [17.0, 1507.3333333333333], [18.0, 1804.0], [19.0, 1629.1666666666665], [20.0, 1966.0000000000002], [21.0, 1825.6666666666667], [22.0, 1911.6], [23.0, 1921.3333333333333], [24.0, 2367.4285714285716], [25.0, 2594.0], [26.0, 2904.4166666666665], [27.0, 2519.7999999999997], [28.0, 3014.0], [29.0, 2689.833333333333], [30.0, 2655.1666666666665], [31.0, 3094.3333333333335]], "isOverall": false, "label": "POST /auth/register", "isController": false}, {"data": [[24.229999999999997, 2375.559999999999]], "isOverall": false, "label": "POST /auth/register-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 37.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1159.25, "minX": 1.7944116E12, "maxY": 1332.5833333333333, "series": [{"data": [[1.7944116E12, 1332.5833333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7944116E12, 1159.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7944116E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2375.559999999999, "minX": 1.7944116E12, "maxY": 2375.559999999999, "series": [{"data": [[1.7944116E12, 2375.559999999999]], "isOverall": false, "label": "POST /auth/register", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7944116E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2375.449999999999, "minX": 1.7944116E12, "maxY": 2375.449999999999, "series": [{"data": [[1.7944116E12, 2375.449999999999]], "isOverall": false, "label": "POST /auth/register", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7944116E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.7949999999999994, "minX": 1.7944116E12, "maxY": 0.7949999999999994, "series": [{"data": [[1.7944116E12, 0.7949999999999994]], "isOverall": false, "label": "POST /auth/register", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7944116E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 225.0, "minX": 1.7944116E12, "maxY": 5019.0, "series": [{"data": [[1.7944116E12, 5019.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7944116E12, 225.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7944116E12, 3619.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7944116E12, 4318.650000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7944116E12, 2456.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7944116E12, 3990.6999999999994]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7944116E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 293.5, "minX": 1.0, "maxY": 3173.5, "series": [{"data": [[2.0, 293.5], [8.0, 2463.5], [9.0, 1481.0], [11.0, 2780.5], [3.0, 460.0], [12.0, 3173.5], [13.0, 1508.0], [14.0, 2980.5], [15.0, 2447.0], [1.0, 2886.0], [16.0, 1804.0], [6.0, 2263.0], [7.0, 2157.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 291.5, "minX": 1.0, "maxY": 3173.5, "series": [{"data": [[2.0, 291.5], [8.0, 2463.5], [9.0, 1481.0], [11.0, 2780.5], [3.0, 460.0], [12.0, 3173.5], [13.0, 1508.0], [14.0, 2980.5], [15.0, 2447.0], [1.0, 2886.0], [16.0, 1803.5], [6.0, 2263.0], [7.0, 2157.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.7944116E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.7944116E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7944116E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.7944116E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.7944116E12, 3.3333333333333335]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7944116E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.7944116E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.7944116E12, 3.3333333333333335]], "isOverall": false, "label": "POST /auth/register-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7944116E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.7944116E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.7944116E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7944116E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

