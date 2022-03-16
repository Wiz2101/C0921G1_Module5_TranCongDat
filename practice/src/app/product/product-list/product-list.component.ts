import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ProductDeleteComponent} from '../product-delete/product-delete.component';
import {OriginService} from '../../service/origin.service';
import {Origin} from '../../model/origin';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList = [];
  originList = [];
  p = 0;
  nameSearch = '';
  importDateSearch = '';
  originSearch: any = '';

  constructor(private productService: ProductService,
              private originService: OriginService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.originService.getAll().subscribe(origin => {
      this.originList = origin;
      this.productService.getAll().subscribe(value => {
        this.productList = value;
        console.log(value);
      });
    });

  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ProductDeleteComponent, {
      data: id,
    });

    dialogRef.afterClosed().subscribe(result => {
      }, error => {
      }, () => {
        this.ngOnInit();
        this.p = 0;
      }
    );
  }

  search() {
    this.productService.search(this.nameSearch, this.importDateSearch, this.originSearch.name).subscribe(value => {
      this.productList = value;
      console.log(this.nameSearch);
      console.log(this.originSearch);
      console.log(this.importDateSearch);
    });
  }

  clear() {
    this.nameSearch = '';
    this.importDateSearch = '';
    this.originSearch = '';
    this.ngOnInit();
  }

}
