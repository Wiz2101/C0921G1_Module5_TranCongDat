import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DeleteComponent} from '../delete/delete.component';
import Swal from 'sweetalert2';
import {ContainerService} from '../../service/container.service';
import {Container} from '../../model/container';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  p = 1;
  containerList: Container[] = [];
  expiredDateSearch = '';
  productSearch = '';

  constructor(private matDialog: MatDialog,
              private containerService: ContainerService) {
  }

  ngOnInit(): void {
    this.containerService.getAll().subscribe(value => {
      this.containerList = value;
      console.log(value);
    });
  }

  openDialog(id: number) {
    const dialogRef = this.matDialog.open(DeleteComponent,
      {
        data: id
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      Swal.fire(
        'Deleted!',
        'This object already removed!',
        'success'
      );
      this.p = 0;
      this.ngOnInit();
    });
  }


  searchContainer() {
    console.log(this.productSearch);
    this.containerService.searchByOption(this.productSearch).subscribe(value => {
      this.containerList = value;
      console.log(value);
    });
  }

  clearSearch() {
    this.productSearch = '';
    this.ngOnInit();
  }
}
