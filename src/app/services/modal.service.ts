import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbModalOptions } from "@ng-bootstrap/ng-bootstrap/modal/modal-config";
import { concat, race } from "rxjs";
import { map, take } from "rxjs/operators";

/**
 * Wrapper for Bootstrap modal service
 */
@Injectable()
export class ModalService {

  constructor(private modal: NgbModal) {
  }


  async show<T>(component: any, initialState: any = {}, options: NgbModalOptions = {}): Promise<T> {
    const modalRef = this.modal.open(component, {
      ...options
    });
    // Assign initial data to component
    Object.assign(modalRef.componentInstance, initialState);

    return race(modalRef.closed, modalRef.dismissed).toPromise();
  }
}
