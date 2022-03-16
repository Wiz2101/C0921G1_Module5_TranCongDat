import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(@Inject(MAT_DIALOG_DATA) public data: number,
              public dialogRef: MatDialogRef<ProductDeleteComponent>,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getById(this.data).subscribe(value => {
      this.product = value;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteById(id).subscribe(value => {
    });
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
