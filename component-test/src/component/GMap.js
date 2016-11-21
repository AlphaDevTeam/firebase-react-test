import React, { Component } from 'react';

class GMap extends Component {
  constructor(props) {
   super(props);
   this.state = {value: props.value};

  //  var loadMap = function()
  //  {
  //    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
  //
  //      var myOptions = {
  //        center: new google.maps.LatLng(10.09, 10.76),
  //        zoom: 15,
  //        mapTypeId: google.maps.MapTypeId.ROADMAP
  //      };
  //      var map = new google.maps.Map(document.getElementById("map"),
  //          myOptions);
  //      };
  //      window.onload= loadMap;
  }

 render() {
   return(
        <div>
          // <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
          <div id="map" style="width:500px;height:500px;"></div>
        </div>


   );
 }
}

export default GMap;
