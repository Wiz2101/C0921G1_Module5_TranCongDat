import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import {ContainerService} from '../../service/container.service';
import {Container} from '../../model/container';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  containerDelete: Container;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DeleteComponent>,
              private containerService: ContainerService) {
  }

  ngOnInit(): void {
    this.containerService.getById(this.data).subscribe(value => {
      this.containerDelete = value;
      console.log(value);
    });
  }

  delete(id: number) {
    this.containerService.delete(id).subscribe(value => {
    }, error => {
    }, () => {
      this.ngOnInit();
      this.dialogRef.close();
    });
  }

  noDelete() {
    this.dialogRef.close();
  }
}
