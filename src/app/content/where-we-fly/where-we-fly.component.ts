import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-where-we-fly',
  templateUrl: './where-we-fly.component.html',
  styleUrls: ['./where-we-fly.component.css']
})
export class WhereWeFlyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.handleClick('ort');
  }

  public handleClick(dest) {
    if (dest === 'ort') {
      document.getElementById('destName').innerText = 'Johannesburg';
      (<HTMLImageElement>document.getElementById('map')).src = '/assets/images/ORT.png';
      (<HTMLImageElement>document.getElementById('destImage')).src = '/assets/images/ortI.jpg';
      document.getElementById('destInfo').innerText = 'Johannesburg, South Africa\'s biggest city and capital of Gauteng province, began as a 19th-century gold-mining settlement. Its sprawling Soweto township was once home to Nelson Mandela and Desmond Tutu. Mandela’s former residence is now the Mandela House museum. Other Soweto museums that recount the struggle to end segregation include the somber Apartheid Museum and Constitution Hill, a former prison complex.';
    } else if (dest === 'mgh') {
      document.getElementById('destName').innerText = 'Margate';
      (<HTMLImageElement>document.getElementById('map')).src = '/assets/images/Mgh.png';
      (<HTMLImageElement>document.getElementById('destImage')).src = '/assets/images/mghI.jpg';
      document.getElementById('destInfo').innerText = 'Margate is a seaside resort town on the KwaZulu-Natal South Coast, about 20 kilometres southwest of Port Shepstone';
    } else if (dest === 'geo') {
      document.getElementById('destName').innerText = 'George';
      (<HTMLImageElement>document.getElementById('map')).src = '/assets/images/geo.png';
      (<HTMLImageElement>document.getElementById('destImage')).src = '/assets/images/geoI.jpg';
      document.getElementById('destInfo').innerText = 'George is a city in South Africa’s Western Cape, on a coastal stretch known as the Garden Route. It’s known for its golf courses and the George Museum, which has exhibits on the local timber industry. The Outeniqua Transport Museum has steam trains and vintage cars. The Garden Route Botanical Garden features trails and local fynbos plants. The Seven Passes road to Knysna town winds through the Outeniqua Mountains.';
    } else if (dest === 'hoed') {
      document.getElementById('destName').innerText = 'Hoedspruit';
      (<HTMLImageElement>document.getElementById('map')).src = '/assets/images/hoed.png';
      (<HTMLImageElement>document.getElementById('destImage')).src = '/assets/images/hoedI.jpg';
      document.getElementById('destInfo').innerText = 'Hoedspruit is a town situated at the foot of the Klein Drakensberg, in the Limpopo province of South Africa, on the railway line from Tzaneen to Kaapmuiden.';
    } else if (dest === 'ct') {
      document.getElementById('destName').innerText = 'Cape Town';
      (<HTMLImageElement>document.getElementById('map')).src = '/assets/images/ct.png';
      (<HTMLImageElement>document.getElementById('destImage')).src = '/assets/images/ctI.jpg';
      document.getElementById('destInfo').innerText = 'Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain’s flat top, from which there are sweeping views of the city, the busy harbor and boats heading for Robben Island, the notorious prison that once held Nelson Mandela, which is now a living museum.';
    } else if (dest === 'sis') {
      document.getElementById('destName').innerText = 'Sishen';
      (<HTMLImageElement>document.getElementById('map')).src = '/assets/images/sis.png';
      (<HTMLImageElement>document.getElementById('destImage')).src = '/assets/images/sisI.jpg';
      document.getElementById('destInfo').innerText = 'Dingleton is a town in Northern Cape, South Africa. The nearby Sishen mine is an iron ore mining activity, connected to the port of Saldanha Bay by the Sishen-Saldanha Railway Line.';
    } else if (dest === 'pe') {
      document.getElementById('destName').innerText = 'Port Elizabeth';
      (<HTMLImageElement>document.getElementById('map')).src = '/assets/images/pe.png';
      (<HTMLImageElement>document.getElementById('destImage')).src = '/assets/images/peI.jpg';
      document.getElementById('destInfo').innerText = 'Port Elizabeth is a city on Algoa Bay in South Africa\'s Eastern Cape Province. A major port, it\'s also known for its numerous beaches. The Donkin Heritage Trail takes in the Old Hill neighbourhood\'s Victorian landmarks. Coastal boat tours spot whales and rare seabirds, while wildlife reserves outside the metropolitan area are home to elephants, rhinos and other big game.';
    } else if (dest === 'plett') {
      document.getElementById('destName').innerText = 'Plettenberg Bay';
      (<HTMLImageElement>document.getElementById('map')).src = '/assets/images/plett.png';
      (<HTMLImageElement>document.getElementById('destImage')).src = '/assets/images/plettI.jpg';
      document.getElementById('destInfo').innerText = 'Plettenberg Bay is a seaside town on the Garden Route in South Africa’s Western Cape Province. The sandy Central Beach and Lookout Beach both have surf breaks. To the south, Robberg Nature Reserve is a rocky peninsula with trails and the Stone Age Nelson Bay Caves. Northeast are Birds of Eden, a free-flight bird sanctuary in indigenous forest, and an elephant sanctuary. Whales come near the coast in migration season.';
    } else if (dest === 'bloem') {
      document.getElementById('destName').innerText = 'Bloemfontein';
      (<HTMLImageElement>document.getElementById('map')).src = '/assets/images/bloem.png';
      (<HTMLImageElement>document.getElementById('destImage')).src = '/assets/images/bloemI.jpg';
      document.getElementById('destInfo').innerText = 'Bloemfontein is the capital city of the province of Free State of South Africa; and, as the judicial capital of the nation, one of South Africa\'s three national capitals and is the seventh largest city in South Africa.';
    }
  }
}
