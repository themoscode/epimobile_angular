import { Component, OnInit } from '@angular/core';
import { Services } from './../../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSelectDatesComponent } from './../../Shared/modal-select-dates/modal-select-dates.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  
  searchFilters : Object;
  getProducts : Object[];
  sortDesc = {
		'product_no' :false,
    'name':false, 
    'stock_data[0].stock_total':false, 
	}
  
  sortName: string = 'name'; //set default
  
  sortBy(sortName){

    console.log('arguments.length',arguments.length);
    console.log('sortName',sortName);
    this.sortName = sortName;
    if (arguments.length>1) this.sortDesc[sortName] = !this.sortDesc[sortName];
    
  }
  
  //initializing p to one
  p: number = 1;
  itemsPerPage: number = 10;

  openModalSelectDates() {
    const modalRef = this.modalService.open(ModalSelectDatesComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  constructor(
    public services: Services,
    private modalService: NgbModal
  ) { 

    this.searchFilters = {
        
      searchText:"",
      datesSelected:false,
      dateFrom:services.tools.dateStr(),
      dateTo:services.tools.dateStr(),
      timeFrom:services.tools.timeStr(),
      timeTo:services.tools.timeStr(),
      isRent:false,
      isSell:false,
      toggleSellStatus:function(){
          this.isSell =!this.isSell
          if (arguments.length == 1) this.isSell = arguments[0];

          if (this.isSell) {
              this.isRent = false;
          }
        // services.searchNavigate.products($scope.searchFilters);
        },
      toggleRentStatus:function(){
          this.isRent =!this.isRent
          if (arguments.length == 1) this.isRent = arguments[0];

          if (this.isRent) {
              this.isSell = false;
          }
         // services.searchNavigate.products($scope.searchFilters);
        }
    }

    this.getProducts = [{
      "primary_key": 334,
      "product_no": 14325,
      "inventory_no": "BAM-PT1-0997",
      "name": "RES Gerb 20s15 silver",
      "is_active": true,
      "is_rent": false,
      "is_sale": true,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "RES G",
      "is_webshop_export": false,
      "_ref_product": "product/334",
      "mlang_description": [{
          "primary_key": 683,
          "product_pk": 334,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "RES Fontäne 20s15 silber",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 684,
          "product_pk": 334,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "RES Gerb 20s15 silver",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 2731,
          "price_rent": 0,
          "price_sale_gro": 20.59,
          "price_sale_net": 17.3025
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 12540,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": [{
          "primary_key": 304,
          "product_pk": 334,
          "product_group_pk": 13,
          "is_sales": true,
          "sequence_name": ";",
          "sequence_pk": "16;13"
      }, {
          "primary_key": 460,
          "product_pk": 334,
          "product_group_pk": 16,
          "is_sales": false,
          "sequence_name": "",
          "sequence_pk": "16"
      }],
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "_group_of_goods_length": 2,
      "$$hashKey": "object:58"
  }, {
      "primary_key": 335,
      "product_no": 14326,
      "inventory_no": "",
      "name": "RES Flame Additive white",
      "is_active": true,
      "is_rent": false,
      "is_sale": true,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "RES Flame",
      "is_webshop_export": false,
      "_ref_product": "product/335",
      "mlang_description": [{
          "primary_key": 685,
          "product_pk": 335,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "RES Flammenadditiv weiß",
          "name_short": "",
          "unit": "Fl",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 686,
          "product_pk": 335,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "RES Flame Additive white",
          "name_short": "",
          "unit": "btl",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 2732,
          "price_rent": 0,
          "price_sale_gro": 20.59,
          "price_sale_net": 17.3025
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 12541,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": [{
          "primary_key": 305,
          "product_pk": 335,
          "product_group_pk": 13,
          "is_sales": true,
          "sequence_name": ";",
          "sequence_pk": "16;13"
      }],
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "_group_of_goods_length": 1,
      "$$hashKey": "object:59"
  }, {
      "primary_key": 408,
      "product_no": 14399,
      "inventory_no": "",
      "name": "Kaeser compressor 2 cylinder in case",
      "is_active": true,
      "is_rent": true,
      "is_sale": true,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "KAE Comp",
      "is_webshop_export": false,
      "_ref_product": "product/408",
      "mlang_description": [{
          "primary_key": 831,
          "product_pk": 408,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "Kaeser Kompressor 2-Zylinder im Case",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 832,
          "product_pk": 408,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "Kaeser compressor 2 cylinder in case",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 1081,
          "price_rent": 40,
          "price_sale_gro": 0,
          "price_sale_net": 40
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 12608,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:60"
  }, {
      "primary_key": 543,
      "product_no": 14524,
      "inventory_no": "",
      "name": "HD Compressor KompTec",
      "is_active": true,
      "is_rent": true,
      "is_sale": false,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "HDK",
      "is_webshop_export": false,
      "_ref_product": "product/543",
      "mlang_description": [{
          "primary_key": 1117,
          "product_pk": 543,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "HD Kompressor KompTec",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": true,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 1118,
          "product_pk": 543,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "HD Compressor KompTec",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 1088,
          "price_rent": 50,
          "price_sale_gro": 0,
          "price_sale_net": 50
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 12730,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:61"
  }, {
      "primary_key": 724,
      "product_no": 14699,
      "inventory_no": "",
      "name": "MagicFX Tape for Compression Caps (50m x 5 cm)",
      "is_active": true,
      "is_rent": false,
      "is_sale": true,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "MFX T",
      "is_webshop_export": false,
      "_ref_product": "product/724",
      "mlang_description": [{
          "primary_key": 1478,
          "product_pk": 724,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "MagicFX Tape für Compression Caps (50m x 5 cm)",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": true,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 1479,
          "product_pk": 724,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "MagicFX Tape for Compression Caps (50m x 5 cm)",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 3159,
          "price_rent": 0,
          "price_sale_gro": 17.61,
          "price_sale_net": 14.8
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 12900,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": [{
          "primary_key": 1066,
          "product_pk": 724,
          "product_group_pk": 35,
          "is_sales": false,
          "sequence_name": "",
          "sequence_pk": "35"
      }],
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "_group_of_goods_length": 1,
      "$$hashKey": "object:62"
  }, {
      "primary_key": 763,
      "product_no": 14737,
      "inventory_no": "",
      "name": "Kaeser compressor 1 cylinder in case",
      "is_active": true,
      "is_rent": true,
      "is_sale": false,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "KAE Comp",
      "is_webshop_export": false,
      "_ref_product": "product/763",
      "mlang_description": [{
          "primary_key": 1555,
          "product_pk": 763,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "Kaeser Kompressor 1-Zylinder im Case",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 1556,
          "product_pk": 763,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "Kaeser compressor 1 cylinder in case",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 3197,
          "price_rent": 35,
          "price_sale_gro": 0,
          "price_sale_net": 0
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 12938,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:63"
  }, {
      "primary_key": 764,
      "product_no": 14738,
      "inventory_no": "",
      "name": "Agre compressor 1 cylinder in case",
      "is_active": true,
      "is_rent": true,
      "is_sale": false,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "AGR Comp",
      "is_webshop_export": false,
      "_ref_product": "product/764",
      "mlang_description": [{
          "primary_key": 1557,
          "product_pk": 764,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "Agre Kompressor 1-Zylinder im Case",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 1558,
          "product_pk": 764,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "Agre compressor 1 cylinder in case",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 3198,
          "price_rent": 35,
          "price_sale_gro": 0,
          "price_sale_net": 0
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 12939,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:64"
  }, {
      "primary_key": 990,
      "product_no": 14911,
      "inventory_no": "",
      "name": "MagicFX CO2 high pressure Distribution Block",
      "is_active": true,
      "is_rent": true,
      "is_sale": false,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "MFX DB CO2",
      "is_webshop_export": false,
      "_ref_product": "product/990",
      "mlang_description": [{
          "primary_key": 2017,
          "product_pk": 990,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "MagicFX CO2 high pressure Distribution Block",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": true,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 2018,
          "product_pk": 990,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "MagicFX CO2 high pressure Distribution Block",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 3369,
          "price_rent": 0,
          "price_sale_gro": 0,
          "price_sale_net": 0
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 13108,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:65"
  }, {
      "primary_key": 991,
      "product_no": 14912,
      "inventory_no": "",
      "name": "Magic FX CO2 Flexible high pressure hose 10m",
      "is_active": false,
      "is_rent": true,
      "is_sale": false,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "MFX FHP",
      "is_webshop_export": false,
      "_ref_product": "product/991",
      "mlang_description": [{
          "primary_key": 2019,
          "product_pk": 991,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "Magic FX CO2 Flexible high pressure hose 10m",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": true,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 2020,
          "product_pk": 991,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "Magic FX CO2 Flexible high pressure hose 10m",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 3371,
          "price_rent": 0,
          "price_sale_gro": 0,
          "price_sale_net": 0
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": "",
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "$$hashKey": "object:66"
  }, {
      "primary_key": 994,
      "product_no": 14915,
      "inventory_no": "",
      "name": "MagicFX CO2 high pressure hose 10m Dominator/Jet",
      "is_active": true,
      "is_rent": true,
      "is_sale": false,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "MFX DJ",
      "is_webshop_export": false,
      "_ref_product": "product/994",
      "mlang_description": [{
          "primary_key": 2025,
          "product_pk": 994,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "MagicFX CO2 high pressure hose 10m Dominator/Jet",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": true,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 2026,
          "product_pk": 994,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "MagicFX CO2 high pressure hose 10m Dominator/Jet",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 3374,
          "price_rent": 0,
          "price_sale_gro": 0,
          "price_sale_net": 0
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 13111,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:67"
  }, {
      "primary_key": 995,
      "product_no": 14916,
      "inventory_no": "",
      "name": "MagicFX CO2 high pressure hose 15m Dominator/Jet",
      "is_active": true,
      "is_rent": true,
      "is_sale": false,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "MFX DJ",
      "is_webshop_export": false,
      "_ref_product": "product/995",
      "mlang_description": [{
          "primary_key": 2027,
          "product_pk": 995,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "MagicFX CO2 high pressure hose 15m Dominator/Jet",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": true,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 2028,
          "product_pk": 995,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "MagicFX CO2 high pressure hose 15m Dominator/Jet",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 3375,
          "price_rent": 0,
          "price_sale_gro": 0,
          "price_sale_net": 0
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 13112,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:68"
  }, {
      "primary_key": 1044,
      "product_no": 14965,
      "inventory_no": "",
      "name": "Senco Air compressor PC1248 EU",
      "is_active": true,
      "is_rent": true,
      "is_sale": false,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "",
      "is_webshop_export": false,
      "_ref_product": "product/1044",
      "mlang_description": [{
          "primary_key": 2126,
          "product_pk": 1044,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "Senco Kompressor PC1248 EU im Case",
          "name_short": "",
          "unit": "Stk",
          "description_short": "\r",
          "description_webshop": "",
          "is_native_lang": true,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 2127,
          "product_pk": 1044,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "Senco Air compressor PC1248 EU",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 98,
          "price_rent": 15,
          "price_sale_gro": 0,
          "price_sale_net": 0
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 13161,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:69"
  }, {
      "primary_key": 2105,
      "product_no": 15971,
      "inventory_no": "",
      "name": "HD Compressor L&W",
      "is_active": true,
      "is_rent": true,
      "is_sale": false,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "HDK",
      "is_webshop_export": false,
      "_ref_product": "product/2105",
      "mlang_description": [{
          "primary_key": 4238,
          "product_pk": 2105,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "HD Kompressor L&W",
          "name_short": "",
          "unit": "Stk",
          "description_short": "Ölwechselintervalle beachten!\r",
          "description_webshop": "",
          "is_native_lang": true,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 4239,
          "product_pk": 2105,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "HD Compressor L&W",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 1552,
          "price_rent": 200,
          "price_sale_gro": 0,
          "price_sale_net": 200
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 17152,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:70"
  }, {
      "primary_key": 2229,
      "product_no": 16087,
      "inventory_no": "",
      "name": "CO2 high pressure hose 3/8 Male - Female, 15m",
      "is_active": true,
      "is_rent": false,
      "is_sale": true,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "",
      "is_webshop_export": false,
      "_ref_product": "product/2229",
      "mlang_description": [{
          "primary_key": 4485,
          "product_pk": 2229,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "CO2 high pressure hose 3/8 Male - Female, 15m",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 4486,
          "product_pk": 2229,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "CO2 high pressure hose 3/8 Male - Female, 15m",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 4525,
          "price_rent": 0,
          "price_sale_gro": 451.01,
          "price_sale_net": 379
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 18080,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:71"
  }, {
      "primary_key": 2340,
      "product_no": 16194,
      "inventory_no": "",
      "name": "MagicFX Co2 high pressure hose 3/8 Male - Female, 1,25m",
      "is_active": true,
      "is_rent": true,
      "is_sale": false,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "MFX DJ",
      "is_webshop_export": false,
      "_ref_product": "product/2340",
      "mlang_description": [{
          "primary_key": 4702,
          "product_pk": 2340,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "MagicFX Co2 high pressure hose 3/8 Male - Female, 1,25m",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 4703,
          "product_pk": 2340,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "MagicFX Co2 high pressure hose 3/8 Male - Female, 1,25m",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 4631,
          "price_rent": 0,
          "price_sale_gro": 0,
          "price_sale_net": 0
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 18936,
          "stock_total": 0,
          "stock_rent": 0,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:72"
  }, {
      "primary_key": 2344,
      "product_no": 16197,
      "inventory_no": "",
      "name": "°Nuvair 3E, 230V Kompressor",
      "is_active": true,
      "is_rent": true,
      "is_sale": false,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "Nuv",
      "is_webshop_export": false,
      "_ref_product": "product/2344",
      "mlang_description": [{
          "primary_key": 4709,
          "product_pk": 2344,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "°Nuvair 3E, 230V Kompressor",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 4710,
          "product_pk": 2344,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "°Nuvair 3E, 230V Kompressor",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 1728,
          "price_rent": 50,
          "price_sale_gro": 0,
          "price_sale_net": 50
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 18960,
          "stock_total": 1,
          "stock_rent": 1,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:73"
  }, {
      "primary_key": 2462,
      "product_no": 16304,
      "inventory_no": "",
      "name": "°Nuvair 3,5 G 5,5HP compressor (gasoline)",
      "is_active": true,
      "is_rent": true,
      "is_sale": false,
      "is_inventory": false,
      "is_virtual": false,
      "matchcode": "Nuv",
      "is_webshop_export": false,
      "_ref_product": "product/2462",
      "mlang_description": [{
          "primary_key": 4939,
          "product_pk": 2462,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 1,
          "lang_str": "Deutsch",
          "name": "°Nuvair 3,5 G 5,5HP Kompressor (Benzin)",
          "name_short": "",
          "unit": "Stk",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }, {
          "primary_key": 4940,
          "product_pk": 2462,
          "transport_pk": 0,
          "pers_func_pk": 0,
          "lang_pk": 2,
          "lang_str": "Englisch",
          "name": "°Nuvair 3,5 G 5,5HP compressor (gasoline)",
          "name_short": "",
          "unit": "pcs",
          "description_short": "",
          "description_webshop": "",
          "is_native_lang": false,
          "is_sales": false,
          "iso-639-1": "",
          "iso-639-2": ""
      }],
      "pricing": {
          "primary_key": 4757,
          "price_rent": 50,
          "price_sale_gro": 0,
          "price_sale_net": 50
      },
      "tech_data": {
          "weight_gro": 0,
          "height_gro": 0,
          "width_gro": 0,
          "depth_gro": 0,
          "capacity_gro": 0
      },
      "stock_data": [{
          "primary_key": 19856,
          "stock_total": 1,
          "stock_rent": 1,
          "stock_sale": 0,
          "stock_inventory": 0,
          "warehouse_id": -1,
          "client_id": 2
      }],
      "group_of_goods": "",
      "_mlang_description_length": 2,
      "_pricing_length": 1,
      "_tech_data_length": 1,
      "_stock_data_length": 1,
      "$$hashKey": "object:74"
  }]
  }

  ngOnInit() {
    console.log(this.getProducts);
  }

}
