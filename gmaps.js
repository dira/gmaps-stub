G_PHYSICAL_MAP = "physical";
G_NORMAL_MAP = {1:1
  ,getProjection : function() {
    return new GProjection();
  }
};

Globals = {}
function GMap2(container) {
  Globals['container'] = container;
  this.getContainer = function() {
    return Globals['container'];
  }
  this.enableScrollWheelZoom = function() {}
  this.addControl = function(control) {
    try {
      control.initialize(this);
    } catch(e) {}
  }
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
    return new GLatLngBounds();
  }
  this.fromContainerPixelToLatLng = function() {
    return new GLatLng();
  }
  this.addOverlay = function() {}
  this.removeOverlay = function() {}
  this.disableScrollWheelZoom = function() {}
  this.disableDoubleClickZoom = function() {}
  this.enableScrollWheelZoom = function() {}
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
  ,addDomListener: function(source, event, handler) {}
  ,bind: function(source, event, object, method) {}
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
function GIcon() {
  this.image = "http://fake.image.com/1";
}
function GSize() {}
function GMarker() {
  this.bindInfoWindow = function() {}
  this.openInfoWindow = function() {}
  this.closeInfoWindow = function() {}
  this.getLatLng = function() {
    return new GLatLng();
  }
  this.setLatLng = function(latlng) {
  }
  this.getIcon = function() {
    return new GIcon();
  }
}

function GMapType() {}
function GMapTypeControl() {}
function GSmallMapControl() {}
function GLargeMapControl() {}

function GCopyrightCollection() {
  this.addCopyright = function() {}
}
function GCopyright() {}

function GLatLngBounds() {
  return {1:1
    ,getNorthEast : function() {}
    ,getSouthWest : function() {}
    ,isFullLat : function() { return true; }
    ,containsLatLng : function(latlng) { return true;}
  }
}

function GTileLayer() {}

function GMercatorProjection() {}
function GClientGeocoder() {}

function GControl() {}

function GPolyline(lanLngs, color, weight, opacity, opts) {
  this.isHidden = function(){ return false }
  this.hide = function() {}
  this.show = function() {}
}
