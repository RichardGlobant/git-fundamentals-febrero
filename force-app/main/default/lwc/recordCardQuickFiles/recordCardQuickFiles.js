import { api, LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm';

export default class RecordCardQuickFiles extends LightningElement {

	@api
	recordId;

	onDeleteAllFilesButtonClick() {
		const confirmation = LightningConfirm.open( {
			message: 'Are you sure you want to delete all files?',
			variant: 'headerless',
			label: 'Are you sure you want to delete all files?'
		} ); /*confirm('Are you sure you want to delete all files!');*/
		if(confirmation) {

		}
	}

}