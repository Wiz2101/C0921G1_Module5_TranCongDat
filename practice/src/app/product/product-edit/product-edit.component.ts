import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {OriginService} from '../../service/origin.service';
import {Product} from '../../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  originList = [];
  editForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    manufacturer: new FormControl(''),
    origin: new FormControl(''),
    unitPrice: new FormControl(''),
    importDate: new FormControl(''),
    stock: new FormControl(''),
  });

  constructor(private productService: ProductService,
              private originService: OriginService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.originService.getAll().subscribe(value => {
      this.originList = value;
    });
    this.productService.getById(Number(this.activatedRoute.snapshot.params.id)).subscribe(value => {
      this.product = value;
      this.editForm.patchValue(this.product);
      console.log(this.editForm);
    });
  }


  editProduct() {
    if (this.editForm.invalid) {
      this.ngOnInit();
    } else {
      this.productService.edit(this.editForm.value).subscribe(() => {
        this.router.navigateByUrl('/product');
      });
    }
  }
}
