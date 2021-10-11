import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

const AllCoreModules = [FlexLayoutModule, AmplifyUIAngularModule];

@NgModule({
  declarations: [],
  imports: [AllCoreModules],
  exports: [AllCoreModules],
})
export class CoreModule {}
//NOTE:
// Only for Modules that should be instantiated once
// Can add Services but do not provide them
// This Module should only be imported in AppModule
