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
        data: {"result": {"minY": 105.0, "minX": 0.0, "maxY": 3398.0, "series": [{"data": [[0.0, 105.0], [0.1, 105.0], [0.2, 105.0], [0.3, 105.0], [0.4, 142.0], [0.5, 142.0], [0.6, 142.0], [0.7, 142.0], [0.8, 143.0], [0.9, 143.0], [1.0, 143.0], [1.1, 143.0], [1.2, 143.0], [1.3, 146.0], [1.4, 146.0], [1.5, 146.0], [1.6, 146.0], [1.7, 146.0], [1.8, 146.0], [1.9, 146.0], [2.0, 149.0], [2.1, 149.0], [2.2, 149.0], [2.3, 149.0], [2.4, 150.0], [2.5, 150.0], [2.6, 150.0], [2.7, 150.0], [2.8, 162.0], [2.9, 162.0], [3.0, 162.0], [3.1, 162.0], [3.2, 167.0], [3.3, 167.0], [3.4, 167.0], [3.5, 167.0], [3.6, 170.0], [3.7, 170.0], [3.8, 170.0], [3.9, 170.0], [4.0, 173.0], [4.1, 173.0], [4.2, 173.0], [4.3, 173.0], [4.4, 177.0], [4.5, 177.0], [4.6, 177.0], [4.7, 177.0], [4.8, 178.0], [4.9, 178.0], [5.0, 178.0], [5.1, 178.0], [5.2, 181.0], [5.3, 181.0], [5.4, 181.0], [5.5, 181.0], [5.6, 181.0], [5.7, 184.0], [5.8, 184.0], [5.9, 184.0], [6.0, 184.0], [6.1, 184.0], [6.2, 184.0], [6.3, 184.0], [6.4, 188.0], [6.5, 188.0], [6.6, 188.0], [6.7, 188.0], [6.8, 188.0], [6.9, 191.0], [7.0, 191.0], [7.1, 191.0], [7.2, 191.0], [7.3, 192.0], [7.4, 192.0], [7.5, 192.0], [7.6, 192.0], [7.7, 193.0], [7.8, 193.0], [7.9, 193.0], [8.0, 193.0], [8.1, 193.0], [8.2, 193.0], [8.3, 193.0], [8.4, 193.0], [8.5, 194.0], [8.6, 194.0], [8.7, 194.0], [8.8, 194.0], [8.9, 194.0], [9.0, 194.0], [9.1, 194.0], [9.2, 194.0], [9.3, 194.0], [9.4, 194.0], [9.5, 194.0], [9.6, 194.0], [9.7, 198.0], [9.8, 198.0], [9.9, 198.0], [10.0, 198.0], [10.1, 199.0], [10.2, 199.0], [10.3, 199.0], [10.4, 199.0], [10.5, 203.0], [10.6, 203.0], [10.7, 203.0], [10.8, 203.0], [10.9, 204.0], [11.0, 204.0], [11.1, 204.0], [11.2, 204.0], [11.3, 205.0], [11.4, 205.0], [11.5, 205.0], [11.6, 205.0], [11.7, 206.0], [11.8, 206.0], [11.9, 206.0], [12.0, 206.0], [12.1, 207.0], [12.2, 207.0], [12.3, 207.0], [12.4, 207.0], [12.5, 208.0], [12.6, 208.0], [12.7, 208.0], [12.8, 208.0], [12.9, 211.0], [13.0, 211.0], [13.1, 211.0], [13.2, 211.0], [13.3, 213.0], [13.4, 213.0], [13.5, 213.0], [13.6, 213.0], [13.7, 216.0], [13.8, 216.0], [13.9, 216.0], [14.0, 216.0], [14.1, 219.0], [14.2, 219.0], [14.3, 219.0], [14.4, 219.0], [14.5, 219.0], [14.6, 219.0], [14.7, 219.0], [14.8, 219.0], [14.9, 222.0], [15.0, 222.0], [15.1, 222.0], [15.2, 222.0], [15.3, 222.0], [15.4, 222.0], [15.5, 222.0], [15.6, 222.0], [15.7, 223.0], [15.8, 223.0], [15.9, 223.0], [16.0, 223.0], [16.1, 225.0], [16.2, 225.0], [16.3, 225.0], [16.4, 225.0], [16.5, 227.0], [16.6, 227.0], [16.7, 227.0], [16.8, 227.0], [16.9, 229.0], [17.0, 229.0], [17.1, 229.0], [17.2, 229.0], [17.3, 231.0], [17.4, 231.0], [17.5, 231.0], [17.6, 232.0], [17.7, 232.0], [17.8, 232.0], [17.9, 232.0], [18.0, 233.0], [18.1, 233.0], [18.2, 233.0], [18.3, 233.0], [18.4, 235.0], [18.5, 235.0], [18.6, 235.0], [18.7, 235.0], [18.8, 236.0], [18.9, 236.0], [19.0, 236.0], [19.1, 236.0], [19.2, 242.0], [19.3, 242.0], [19.4, 242.0], [19.5, 242.0], [19.6, 245.0], [19.7, 245.0], [19.8, 245.0], [19.9, 245.0], [20.0, 245.0], [20.1, 245.0], [20.2, 245.0], [20.3, 245.0], [20.4, 248.0], [20.5, 248.0], [20.6, 248.0], [20.7, 248.0], [20.8, 249.0], [20.9, 249.0], [21.0, 249.0], [21.1, 249.0], [21.2, 250.0], [21.3, 250.0], [21.4, 250.0], [21.5, 250.0], [21.6, 257.0], [21.7, 257.0], [21.8, 257.0], [21.9, 257.0], [22.0, 261.0], [22.1, 261.0], [22.2, 261.0], [22.3, 261.0], [22.4, 264.0], [22.5, 264.0], [22.6, 264.0], [22.7, 264.0], [22.8, 269.0], [22.9, 269.0], [23.0, 269.0], [23.1, 269.0], [23.2, 274.0], [23.3, 274.0], [23.4, 274.0], [23.5, 274.0], [23.6, 276.0], [23.7, 276.0], [23.8, 276.0], [23.9, 276.0], [24.0, 284.0], [24.1, 284.0], [24.2, 284.0], [24.3, 284.0], [24.4, 288.0], [24.5, 288.0], [24.6, 288.0], [24.7, 288.0], [24.8, 291.0], [24.9, 291.0], [25.0, 291.0], [25.1, 291.0], [25.2, 293.0], [25.3, 293.0], [25.4, 293.0], [25.5, 293.0], [25.6, 305.0], [25.7, 305.0], [25.8, 305.0], [25.9, 305.0], [26.0, 307.0], [26.1, 307.0], [26.2, 307.0], [26.3, 307.0], [26.4, 310.0], [26.5, 310.0], [26.6, 310.0], [26.7, 310.0], [26.8, 314.0], [26.9, 314.0], [27.0, 314.0], [27.1, 314.0], [27.2, 325.0], [27.3, 325.0], [27.4, 325.0], [27.5, 325.0], [27.6, 367.0], [27.7, 367.0], [27.8, 367.0], [27.9, 367.0], [28.0, 369.0], [28.1, 369.0], [28.2, 369.0], [28.3, 369.0], [28.4, 383.0], [28.5, 383.0], [28.6, 383.0], [28.7, 383.0], [28.8, 416.0], [28.9, 416.0], [29.0, 416.0], [29.1, 416.0], [29.2, 417.0], [29.3, 417.0], [29.4, 417.0], [29.5, 417.0], [29.6, 444.0], [29.7, 444.0], [29.8, 444.0], [29.9, 444.0], [30.0, 445.0], [30.1, 445.0], [30.2, 445.0], [30.3, 445.0], [30.4, 445.0], [30.5, 445.0], [30.6, 445.0], [30.7, 445.0], [30.8, 458.0], [30.9, 458.0], [31.0, 458.0], [31.1, 458.0], [31.2, 465.0], [31.3, 465.0], [31.4, 465.0], [31.5, 465.0], [31.6, 480.0], [31.7, 480.0], [31.8, 480.0], [31.9, 480.0], [32.0, 484.0], [32.1, 484.0], [32.2, 484.0], [32.3, 484.0], [32.4, 487.0], [32.5, 487.0], [32.6, 487.0], [32.7, 487.0], [32.8, 491.0], [32.9, 491.0], [33.0, 491.0], [33.1, 491.0], [33.2, 499.0], [33.3, 499.0], [33.4, 499.0], [33.5, 499.0], [33.6, 509.0], [33.7, 509.0], [33.8, 509.0], [33.9, 509.0], [34.0, 510.0], [34.1, 510.0], [34.2, 510.0], [34.3, 510.0], [34.4, 524.0], [34.5, 524.0], [34.6, 524.0], [34.7, 524.0], [34.8, 524.0], [34.9, 524.0], [35.0, 524.0], [35.1, 524.0], [35.2, 537.0], [35.3, 537.0], [35.4, 537.0], [35.5, 537.0], [35.6, 542.0], [35.7, 542.0], [35.8, 542.0], [35.9, 542.0], [36.0, 566.0], [36.1, 566.0], [36.2, 566.0], [36.3, 566.0], [36.4, 586.0], [36.5, 586.0], [36.6, 586.0], [36.7, 586.0], [36.8, 609.0], [36.9, 609.0], [37.0, 609.0], [37.1, 609.0], [37.2, 627.0], [37.3, 627.0], [37.4, 627.0], [37.5, 627.0], [37.6, 629.0], [37.7, 629.0], [37.8, 629.0], [37.9, 629.0], [38.0, 635.0], [38.1, 635.0], [38.2, 635.0], [38.3, 635.0], [38.4, 640.0], [38.5, 640.0], [38.6, 640.0], [38.7, 640.0], [38.8, 645.0], [38.9, 645.0], [39.0, 645.0], [39.1, 645.0], [39.2, 670.0], [39.3, 670.0], [39.4, 670.0], [39.5, 670.0], [39.6, 682.0], [39.7, 682.0], [39.8, 682.0], [39.9, 682.0], [40.0, 692.0], [40.1, 692.0], [40.2, 692.0], [40.3, 692.0], [40.4, 702.0], [40.5, 702.0], [40.6, 702.0], [40.7, 702.0], [40.8, 711.0], [40.9, 711.0], [41.0, 711.0], [41.1, 711.0], [41.2, 714.0], [41.3, 714.0], [41.4, 714.0], [41.5, 714.0], [41.6, 775.0], [41.7, 775.0], [41.8, 775.0], [41.9, 775.0], [42.0, 776.0], [42.1, 776.0], [42.2, 776.0], [42.3, 776.0], [42.4, 808.0], [42.5, 808.0], [42.6, 808.0], [42.7, 808.0], [42.8, 811.0], [42.9, 811.0], [43.0, 811.0], [43.1, 811.0], [43.2, 829.0], [43.3, 829.0], [43.4, 829.0], [43.5, 829.0], [43.6, 888.0], [43.7, 888.0], [43.8, 888.0], [43.9, 888.0], [44.0, 900.0], [44.1, 900.0], [44.2, 900.0], [44.3, 900.0], [44.4, 983.0], [44.5, 983.0], [44.6, 983.0], [44.7, 983.0], [44.8, 1005.0], [44.9, 1005.0], [45.0, 1005.0], [45.1, 1005.0], [45.2, 1040.0], [45.3, 1040.0], [45.4, 1040.0], [45.5, 1040.0], [45.6, 1052.0], [45.7, 1052.0], [45.8, 1052.0], [45.9, 1052.0], [46.0, 1057.0], [46.1, 1057.0], [46.2, 1057.0], [46.3, 1057.0], [46.4, 1067.0], [46.5, 1067.0], [46.6, 1067.0], [46.7, 1067.0], [46.8, 1118.0], [46.9, 1118.0], [47.0, 1118.0], [47.1, 1118.0], [47.2, 1119.0], [47.3, 1119.0], [47.4, 1119.0], [47.5, 1119.0], [47.6, 1131.0], [47.7, 1131.0], [47.8, 1131.0], [47.9, 1131.0], [48.0, 1138.0], [48.1, 1138.0], [48.2, 1138.0], [48.3, 1138.0], [48.4, 1142.0], [48.5, 1142.0], [48.6, 1142.0], [48.7, 1142.0], [48.8, 1147.0], [48.9, 1147.0], [49.0, 1147.0], [49.1, 1147.0], [49.2, 1167.0], [49.3, 1167.0], [49.4, 1167.0], [49.5, 1167.0], [49.6, 1185.0], [49.7, 1185.0], [49.8, 1185.0], [49.9, 1185.0], [50.0, 1198.0], [50.1, 1198.0], [50.2, 1198.0], [50.3, 1198.0], [50.4, 1198.0], [50.5, 1198.0], [50.6, 1198.0], [50.7, 1198.0], [50.8, 1264.0], [50.9, 1264.0], [51.0, 1264.0], [51.1, 1264.0], [51.2, 1278.0], [51.3, 1278.0], [51.4, 1278.0], [51.5, 1278.0], [51.6, 1292.0], [51.7, 1292.0], [51.8, 1292.0], [51.9, 1292.0], [52.0, 1293.0], [52.1, 1293.0], [52.2, 1293.0], [52.3, 1293.0], [52.4, 1301.0], [52.5, 1301.0], [52.6, 1301.0], [52.7, 1301.0], [52.8, 1304.0], [52.9, 1304.0], [53.0, 1304.0], [53.1, 1304.0], [53.2, 1313.0], [53.3, 1313.0], [53.4, 1313.0], [53.5, 1313.0], [53.6, 1318.0], [53.7, 1318.0], [53.8, 1318.0], [53.9, 1318.0], [54.0, 1319.0], [54.1, 1319.0], [54.2, 1319.0], [54.3, 1319.0], [54.4, 1324.0], [54.5, 1324.0], [54.6, 1324.0], [54.7, 1324.0], [54.8, 1337.0], [54.9, 1337.0], [55.0, 1337.0], [55.1, 1337.0], [55.2, 1366.0], [55.3, 1366.0], [55.4, 1366.0], [55.5, 1366.0], [55.6, 1368.0], [55.7, 1368.0], [55.8, 1368.0], [55.9, 1368.0], [56.0, 1414.0], [56.1, 1414.0], [56.2, 1414.0], [56.3, 1414.0], [56.4, 1431.0], [56.5, 1431.0], [56.6, 1431.0], [56.7, 1431.0], [56.8, 1503.0], [56.9, 1503.0], [57.0, 1503.0], [57.1, 1503.0], [57.2, 1507.0], [57.3, 1507.0], [57.4, 1507.0], [57.5, 1507.0], [57.6, 1518.0], [57.7, 1518.0], [57.8, 1518.0], [57.9, 1518.0], [58.0, 1521.0], [58.1, 1521.0], [58.2, 1521.0], [58.3, 1521.0], [58.4, 1532.0], [58.5, 1532.0], [58.6, 1532.0], [58.7, 1532.0], [58.8, 1559.0], [58.9, 1559.0], [59.0, 1559.0], [59.1, 1559.0], [59.2, 1568.0], [59.3, 1568.0], [59.4, 1568.0], [59.5, 1568.0], [59.6, 1579.0], [59.7, 1579.0], [59.8, 1579.0], [59.9, 1579.0], [60.0, 1591.0], [60.1, 1591.0], [60.2, 1591.0], [60.3, 1591.0], [60.4, 1598.0], [60.5, 1598.0], [60.6, 1598.0], [60.7, 1598.0], [60.8, 1603.0], [60.9, 1603.0], [61.0, 1603.0], [61.1, 1603.0], [61.2, 1621.0], [61.3, 1621.0], [61.4, 1621.0], [61.5, 1621.0], [61.6, 1632.0], [61.7, 1632.0], [61.8, 1632.0], [61.9, 1632.0], [62.0, 1633.0], [62.1, 1633.0], [62.2, 1633.0], [62.3, 1633.0], [62.4, 1647.0], [62.5, 1647.0], [62.6, 1647.0], [62.7, 1647.0], [62.8, 1653.0], [62.9, 1653.0], [63.0, 1653.0], [63.1, 1653.0], [63.2, 1659.0], [63.3, 1659.0], [63.4, 1659.0], [63.5, 1659.0], [63.6, 1710.0], [63.7, 1710.0], [63.8, 1710.0], [63.9, 1710.0], [64.0, 1720.0], [64.1, 1720.0], [64.2, 1720.0], [64.3, 1720.0], [64.4, 1729.0], [64.5, 1729.0], [64.6, 1729.0], [64.7, 1729.0], [64.8, 1731.0], [64.9, 1731.0], [65.0, 1731.0], [65.1, 1731.0], [65.2, 1740.0], [65.3, 1740.0], [65.4, 1740.0], [65.5, 1740.0], [65.6, 1747.0], [65.7, 1747.0], [65.8, 1747.0], [65.9, 1747.0], [66.0, 1763.0], [66.1, 1763.0], [66.2, 1763.0], [66.3, 1763.0], [66.4, 1779.0], [66.5, 1779.0], [66.6, 1779.0], [66.7, 1779.0], [66.8, 1804.0], [66.9, 1804.0], [67.0, 1804.0], [67.1, 1804.0], [67.2, 1810.0], [67.3, 1810.0], [67.4, 1810.0], [67.5, 1810.0], [67.6, 1810.0], [67.7, 1810.0], [67.8, 1810.0], [67.9, 1810.0], [68.0, 1819.0], [68.1, 1819.0], [68.2, 1819.0], [68.3, 1819.0], [68.4, 1829.0], [68.5, 1829.0], [68.6, 1829.0], [68.7, 1829.0], [68.8, 1840.0], [68.9, 1840.0], [69.0, 1840.0], [69.1, 1840.0], [69.2, 1866.0], [69.3, 1866.0], [69.4, 1866.0], [69.5, 1866.0], [69.6, 1876.0], [69.7, 1876.0], [69.8, 1876.0], [69.9, 1876.0], [70.0, 1881.0], [70.1, 1881.0], [70.2, 1881.0], [70.3, 1881.0], [70.4, 1903.0], [70.5, 1903.0], [70.6, 1903.0], [70.7, 1903.0], [70.8, 1920.0], [70.9, 1920.0], [71.0, 1920.0], [71.1, 1920.0], [71.2, 1924.0], [71.3, 1924.0], [71.4, 1924.0], [71.5, 1924.0], [71.6, 1951.0], [71.7, 1951.0], [71.8, 1951.0], [71.9, 1951.0], [72.0, 1960.0], [72.1, 1960.0], [72.2, 1960.0], [72.3, 1960.0], [72.4, 1965.0], [72.5, 1965.0], [72.6, 1965.0], [72.7, 1965.0], [72.8, 1982.0], [72.9, 1982.0], [73.0, 1982.0], [73.1, 1982.0], [73.2, 1983.0], [73.3, 1983.0], [73.4, 1983.0], [73.5, 1983.0], [73.6, 1985.0], [73.7, 1985.0], [73.8, 1985.0], [73.9, 1985.0], [74.0, 2029.0], [74.1, 2029.0], [74.2, 2029.0], [74.3, 2029.0], [74.4, 2037.0], [74.5, 2037.0], [74.6, 2037.0], [74.7, 2037.0], [74.8, 2043.0], [74.9, 2043.0], [75.0, 2043.0], [75.1, 2043.0], [75.2, 2058.0], [75.3, 2058.0], [75.4, 2058.0], [75.5, 2058.0], [75.6, 2073.0], [75.7, 2073.0], [75.8, 2073.0], [75.9, 2073.0], [76.0, 2080.0], [76.1, 2080.0], [76.2, 2080.0], [76.3, 2080.0], [76.4, 2084.0], [76.5, 2084.0], [76.6, 2084.0], [76.7, 2084.0], [76.8, 2084.0], [76.9, 2119.0], [77.0, 2119.0], [77.1, 2119.0], [77.2, 2119.0], [77.3, 2121.0], [77.4, 2121.0], [77.5, 2121.0], [77.6, 2121.0], [77.7, 2139.0], [77.8, 2139.0], [77.9, 2139.0], [78.0, 2139.0], [78.1, 2152.0], [78.2, 2152.0], [78.3, 2152.0], [78.4, 2152.0], [78.5, 2158.0], [78.6, 2158.0], [78.7, 2158.0], [78.8, 2158.0], [78.9, 2164.0], [79.0, 2164.0], [79.1, 2164.0], [79.2, 2164.0], [79.3, 2198.0], [79.4, 2198.0], [79.5, 2198.0], [79.6, 2198.0], [79.7, 2235.0], [79.8, 2235.0], [79.9, 2235.0], [80.0, 2235.0], [80.1, 2237.0], [80.2, 2237.0], [80.3, 2237.0], [80.4, 2237.0], [80.5, 2296.0], [80.6, 2296.0], [80.7, 2296.0], [80.8, 2296.0], [80.9, 2311.0], [81.0, 2311.0], [81.1, 2311.0], [81.2, 2311.0], [81.3, 2318.0], [81.4, 2318.0], [81.5, 2318.0], [81.6, 2318.0], [81.7, 2320.0], [81.8, 2320.0], [81.9, 2320.0], [82.0, 2320.0], [82.1, 2370.0], [82.2, 2370.0], [82.3, 2370.0], [82.4, 2370.0], [82.5, 2414.0], [82.6, 2414.0], [82.7, 2414.0], [82.8, 2414.0], [82.9, 2483.0], [83.0, 2483.0], [83.1, 2483.0], [83.2, 2483.0], [83.3, 2488.0], [83.4, 2488.0], [83.5, 2488.0], [83.6, 2488.0], [83.7, 2493.0], [83.8, 2493.0], [83.9, 2493.0], [84.0, 2493.0], [84.1, 2513.0], [84.2, 2513.0], [84.3, 2513.0], [84.4, 2513.0], [84.5, 2521.0], [84.6, 2521.0], [84.7, 2521.0], [84.8, 2521.0], [84.9, 2533.0], [85.0, 2533.0], [85.1, 2533.0], [85.2, 2533.0], [85.3, 2559.0], [85.4, 2559.0], [85.5, 2559.0], [85.6, 2559.0], [85.7, 2574.0], [85.8, 2574.0], [85.9, 2574.0], [86.0, 2574.0], [86.1, 2577.0], [86.2, 2577.0], [86.3, 2577.0], [86.4, 2577.0], [86.5, 2597.0], [86.6, 2597.0], [86.7, 2597.0], [86.8, 2597.0], [86.9, 2628.0], [87.0, 2628.0], [87.1, 2628.0], [87.2, 2628.0], [87.3, 2655.0], [87.4, 2655.0], [87.5, 2655.0], [87.6, 2655.0], [87.7, 2663.0], [87.8, 2663.0], [87.9, 2663.0], [88.0, 2663.0], [88.1, 2664.0], [88.2, 2664.0], [88.3, 2664.0], [88.4, 2664.0], [88.5, 2672.0], [88.6, 2672.0], [88.7, 2672.0], [88.8, 2672.0], [88.9, 2678.0], [89.0, 2678.0], [89.1, 2678.0], [89.2, 2678.0], [89.3, 2688.0], [89.4, 2688.0], [89.5, 2688.0], [89.6, 2688.0], [89.7, 2713.0], [89.8, 2713.0], [89.9, 2713.0], [90.0, 2713.0], [90.1, 2714.0], [90.2, 2714.0], [90.3, 2714.0], [90.4, 2714.0], [90.5, 2798.0], [90.6, 2798.0], [90.7, 2798.0], [90.8, 2798.0], [90.9, 2810.0], [91.0, 2810.0], [91.1, 2810.0], [91.2, 2810.0], [91.3, 2823.0], [91.4, 2823.0], [91.5, 2823.0], [91.6, 2823.0], [91.7, 2841.0], [91.8, 2841.0], [91.9, 2841.0], [92.0, 2841.0], [92.1, 2875.0], [92.2, 2875.0], [92.3, 2875.0], [92.4, 2875.0], [92.5, 2939.0], [92.6, 2939.0], [92.7, 2939.0], [92.8, 2939.0], [92.9, 2962.0], [93.0, 2962.0], [93.1, 2962.0], [93.2, 2962.0], [93.3, 2973.0], [93.4, 2973.0], [93.5, 2973.0], [93.6, 2973.0], [93.7, 2975.0], [93.8, 2975.0], [93.9, 2975.0], [94.0, 2975.0], [94.1, 2980.0], [94.2, 2980.0], [94.3, 2980.0], [94.4, 2980.0], [94.5, 2993.0], [94.6, 2993.0], [94.7, 2993.0], [94.8, 2993.0], [94.9, 2995.0], [95.0, 2995.0], [95.1, 2995.0], [95.2, 2995.0], [95.3, 3045.0], [95.4, 3045.0], [95.5, 3045.0], [95.6, 3045.0], [95.7, 3048.0], [95.8, 3048.0], [95.9, 3048.0], [96.0, 3048.0], [96.1, 3049.0], [96.2, 3049.0], [96.3, 3049.0], [96.4, 3049.0], [96.5, 3102.0], [96.6, 3102.0], [96.7, 3102.0], [96.8, 3102.0], [96.9, 3123.0], [97.0, 3123.0], [97.1, 3123.0], [97.2, 3123.0], [97.3, 3123.0], [97.4, 3123.0], [97.5, 3123.0], [97.6, 3123.0], [97.7, 3238.0], [97.8, 3238.0], [97.9, 3238.0], [98.0, 3238.0], [98.1, 3269.0], [98.2, 3269.0], [98.3, 3269.0], [98.4, 3269.0], [98.5, 3320.0], [98.6, 3320.0], [98.7, 3320.0], [98.8, 3320.0], [98.9, 3340.0], [99.0, 3340.0], [99.1, 3340.0], [99.2, 3340.0], [99.3, 3369.0], [99.4, 3369.0], [99.5, 3369.0], [99.6, 3369.0], [99.7, 3398.0], [99.8, 3398.0], [99.9, 3398.0], [100.0, 3398.0]], "isOverall": false, "label": "POST /auth/login", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 38.0, "series": [{"data": [[600.0, 9.0], [700.0, 5.0], [800.0, 4.0], [900.0, 2.0], [1000.0, 5.0], [1100.0, 10.0], [1200.0, 4.0], [1300.0, 9.0], [1400.0, 2.0], [1500.0, 10.0], [100.0, 26.0], [1600.0, 7.0], [1700.0, 8.0], [1800.0, 9.0], [1900.0, 9.0], [2000.0, 7.0], [2100.0, 7.0], [2300.0, 4.0], [2200.0, 3.0], [2400.0, 4.0], [2500.0, 7.0], [2600.0, 7.0], [2700.0, 3.0], [2800.0, 4.0], [2900.0, 7.0], [3000.0, 3.0], [3100.0, 3.0], [200.0, 38.0], [3300.0, 4.0], [3200.0, 2.0], [300.0, 8.0], [400.0, 12.0], [500.0, 8.0]], "isOverall": false, "label": "POST /auth/login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 58.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 108.0, "series": [{"data": [[0.0, 84.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 58.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 108.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 16.320000000000007, "minX": 1.79436468E12, "maxY": 16.320000000000007, "series": [{"data": [[1.79436468E12, 16.320000000000007]], "isOverall": false, "label": "Usuarios concurrentes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79436468E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 145.4, "minX": 1.0, "maxY": 2787.388888888889, "series": [{"data": [[2.0, 264.3333333333333], [3.0, 145.4], [4.0, 244.9090909090909], [5.0, 226.12], [6.0, 273.64], [7.0, 348.2], [8.0, 545.6666666666666], [9.0, 540.0], [10.0, 716.0000000000001], [11.0, 706.0], [12.0, 819.0], [13.0, 980.3333333333334], [14.0, 1134.3333333333333], [15.0, 1197.6666666666667], [16.0, 1198.5555555555557], [1.0, 635.0], [17.0, 1329.8], [18.0, 1567.25], [19.0, 1730.0], [20.0, 1449.3333333333333], [21.0, 1723.3999999999999], [22.0, 1661.5714285714284], [23.0, 1242.0], [24.0, 1727.5], [25.0, 1970.9999999999998], [26.0, 1884.3333333333335], [27.0, 2027.3999999999999], [28.0, 2508.5294117647054], [29.0, 2617.352941176471], [30.0, 2787.388888888889], [31.0, 2692.1666666666665]], "isOverall": false, "label": "POST /auth/login", "isController": false}, {"data": [[16.320000000000007, 1292.7359999999999]], "isOverall": false, "label": "POST /auth/login-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 31.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 991.6666666666666, "minX": 1.79436468E12, "maxY": 1656.5666666666666, "series": [{"data": [[1.79436468E12, 1656.5666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79436468E12, 991.6666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79436468E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1292.7359999999999, "minX": 1.79436468E12, "maxY": 1292.7359999999999, "series": [{"data": [[1.79436468E12, 1292.7359999999999]], "isOverall": false, "label": "POST /auth/login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79436468E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1292.6640000000002, "minX": 1.79436468E12, "maxY": 1292.6640000000002, "series": [{"data": [[1.79436468E12, 1292.6640000000002]], "isOverall": false, "label": "POST /auth/login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79436468E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5480000000000006, "minX": 1.79436468E12, "maxY": 0.5480000000000006, "series": [{"data": [[1.79436468E12, 0.5480000000000006]], "isOverall": false, "label": "POST /auth/login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79436468E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 105.0, "minX": 1.79436468E12, "maxY": 3398.0, "series": [{"data": [[1.79436468E12, 3398.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79436468E12, 105.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79436468E12, 2713.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79436468E12, 3354.21]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79436468E12, 1191.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79436468E12, 3017.4999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79436468E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 220.5, "minX": 2.0, "maxY": 2875.0, "series": [{"data": [[8.0, 1728.5], [2.0, 2033.0], [9.0, 1562.5], [10.0, 1215.5], [11.0, 2668.0], [15.0, 638.0], [16.0, 444.5], [17.0, 1579.0], [19.0, 2875.0], [20.0, 941.5], [21.0, 1960.0], [22.0, 220.5], [7.0, 2488.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 220.5, "minX": 2.0, "maxY": 2875.0, "series": [{"data": [[8.0, 1728.5], [2.0, 2033.0], [9.0, 1562.5], [10.0, 1215.5], [11.0, 2667.5], [15.0, 638.0], [16.0, 444.5], [17.0, 1579.0], [19.0, 2875.0], [20.0, 941.5], [21.0, 1960.0], [22.0, 220.5], [7.0, 2488.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.79436468E12, "maxY": 4.166666666666667, "series": [{"data": [[1.79436468E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79436468E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.79436468E12, "maxY": 4.166666666666667, "series": [{"data": [[1.79436468E12, 4.166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79436468E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.79436468E12, "maxY": 4.166666666666667, "series": [{"data": [[1.79436468E12, 4.166666666666667]], "isOverall": false, "label": "POST /auth/login-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79436468E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.79436468E12, "maxY": 4.166666666666667, "series": [{"data": [[1.79436468E12, 4.166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79436468E12, "title": "Total Transactions Per Second"}},
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

