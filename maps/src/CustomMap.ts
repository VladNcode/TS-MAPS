interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): google.maps.Marker {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    return marker;
  }

  addMarkerInfo(marker: google.maps.Marker, text: string): void {
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: text,
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
