/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-menu-button-animations.js
 */


// tslint:disable:variable-name API description
// tslint:disable:no-any describes the API as best we are able today

declare module 'goog:npm.polymer.paperMenuButton.PaperMenuButtonAnimations' {

  import {NeonAnimationBehavior} from 'goog:npm.polymer.neonAnimation.NeonAnimationBehavior'; // from //third_party/javascript/polymer/v2/neon-animation

  import {Polymer} from 'goog:npm.polymer.polymer.lib.legacy.PolymerFn'; // from //third_party/javascript/polymer/v2/polymer

  import {LegacyElementMixin} from 'goog:npm.polymer.polymer.lib.legacy.LegacyElementMixin'; // from //third_party/javascript/polymer/v2/polymer

  interface PaperMenuGrowHeightAnimationElement extends NeonAnimationBehavior, LegacyElementMixin, HTMLElement {
    configure(config: any): any;
  }

  export {PaperMenuGrowHeightAnimationElement};

  global {

    interface HTMLElementTagNameMap {
      "paper-menu-grow-height-animation": PaperMenuGrowHeightAnimationElement;
      "paper-menu-grow-width-animation": PaperMenuGrowWidthAnimationElement;
      "paper-menu-shrink-width-animation": PaperMenuShrinkWidthAnimationElement;
      "paper-menu-shrink-height-animation": PaperMenuShrinkHeightAnimationElement;
    }
  }

  interface PaperMenuGrowWidthAnimationElement extends NeonAnimationBehavior, LegacyElementMixin, HTMLElement {
    configure(config: any): any;
  }

  export {PaperMenuGrowWidthAnimationElement};

  interface PaperMenuShrinkWidthAnimationElement extends NeonAnimationBehavior, LegacyElementMixin, HTMLElement {
    configure(config: any): any;
  }

  export {PaperMenuShrinkWidthAnimationElement};

  interface PaperMenuShrinkHeightAnimationElement extends NeonAnimationBehavior, LegacyElementMixin, HTMLElement {
    configure(config: any): any;
  }

  export {PaperMenuShrinkHeightAnimationElement};
}