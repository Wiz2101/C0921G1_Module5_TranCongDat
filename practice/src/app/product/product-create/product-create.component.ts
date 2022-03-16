import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Origin} from '../../model/origin';
import {FormControl, FormGroup} from '@angular/forms';
import {OriginService} from '../../service/origin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  originList = [];
  createForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      manufacturer: new FormControl(''),
      origin: new FormControl(''),
      unitPrice: new FormControl(''),
      importDate: new FormControl(''),
      stock: new FormControl(''),
    }
  );

  constructor(private productService: ProductService,
              private originService: OriginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.originService.getAll().subscribe(value => {
      this.originList = value;
    });
  }

  createProduct() {
    if (this.createForm.invalid) {
      this.ngOnInit();
    } else {
      this.productService.save(this.createForm.value).subscribe(value => {
      }, error => {
      }, () => this.router.navigateByUrl('/product'));
    }
  }

}
