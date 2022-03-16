import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ContainerService} from '../../service/container.service';
import {Router} from '@angular/router';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern('^^CT-\\d{4}$')]),
    product: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('^\\d+$')]),
    importDate: new FormControl('', [Validators.required]),
    manufactureDate: new FormControl('', [Validators.required]),
    expiredDate: new FormControl('', [Validators.required])
  });

  expriedDate: any;
  importedDate: any;

  productList: Product[] = [];

  constructor(private productService: ProductService,
              private containerService: ContainerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(value => {
      this.productList = value;
      console.log(value);
    });
  }

  createContainer() {
    if (this.createForm.invalid) {
      this.ngOnInit();
    } else {
      this.containerService.save(this.createForm.value).subscribe(value => {
      }, error => {
      }, () => {
        console.log(this.createForm.value);
        this.router.navigateByUrl('/container');
      });
    }
  }

  getImportDate($event: MatDatepickerInputEvent<unknown>) {
    console.log($event.value);
    this.importedDate = $event.target.value;
  }

  getExpiredDate($event: MatDatepickerInputEvent<unknown>) {
    this.expriedDate = $event.target.value;
  }
}
