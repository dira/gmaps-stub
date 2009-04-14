G_PHYSICAL_MAP = "physical";
G_NORMAL_MAP = {1:1
  ,getProjection : function() {
    return new GProjection();
  }
};

Globals = {}
function GMap2(container) {
  Globals['container'] = container;
  this.enableScrollWheelZoom = function() {}
  this.addControl = function() {}
  this.addMapType = function() {}
  this.getMapTypes = function() { return []; }
  this.getCurrentMapType = function() {
    return {1:1
      ,getName : function() {}
      ,getProjection : function() {
        return new GProjection();
      }
    }
  }
  this.setCenter = function() {}
  this.getCenter = function() {
    return {1:1
      ,lat : function() {}
      ,lng : function() {}
    }
  }
  this.getZoom = function() {}
  this.checkResize = function() {}
  this.getBounds = function() {
    return {1:1
      ,getNorthEast : function() {}
      ,getSouthWest : function() {}
      ,isFullLat : function() { return true; }
    }
  }
  this.fromContainerPixelToLatLng = function() {
    return new GLatLng();
  }
  this.addOverlay = function() {}
}

GEvent = {1:1
  ,addListener : function(receiver, type, callback) {
    var c = Globals['container'];
    if (type == 'load') {
      c.style.backgroundColor = "lightblue";
      // immediate positive response
      callback.call();
    }
  }
  ,removeListener : function() {}
}
function GProjection() {
  this.fromLatLngToPixel = function(latlng, zoom) {
    return new GPoint();
  }
  this.fromPixelToLatLng = function(point, zoom) {
    return new GPoint();
  }
}

function GPoint() {
  this.x = 0;
  this.y = 0;
}
function GLatLng() {
  this.lat = function() {
    return 0;
  };
  this.lng = function() {
    return 0;
  };
}
function GIcon() {}
function GSize() {}
function GMarker() {
  this.bindInfoWindow = function() {}
  this.openInfoWindow = function() {}
  this.getLatLng = function() {
    return new GLatLng();
  }
}

function GMapType() {}
function GMapTypeControl() {}
function GLargeMapControl() {}

function GCopyrightCollection() {
  this.addCopyright = function() {}
}
function GCopyright() {}

function GLatLngBounds() {}

function GTileLayer() {}

function GMercatorProjection() {}
function GClientGeocoder() {}
