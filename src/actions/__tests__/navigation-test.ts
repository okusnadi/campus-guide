/**
 *
 * @license
 * Copyright (C) 2016-2017 Joseph Roque
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author Joseph Roque
 * @created 2016-10-17
 * @file navigation-test.ts
 * @description Tests navigation actions
 *
 */
'use strict';

// Imports
import * as navigation from '../navigation';

// Types
import { Tab } from '../../../typings/global';
import * as Actions from '../../actionTypes';

describe('navigation actions', () => {

  it('should create an action to switch the tabs', () => {
    const tab: Tab = 'find';
    const expectedAction = { type: Actions.App.SwitchTab, tab };
    expect(navigation.switchTab(tab)).toEqual(expectedAction);
  });

  it('should create an action to navigate backwards', () => {
    const expectedAction = { type: Actions.Navigation.NavigateBack };
    expect(navigation.navigateBack()).toEqual(expectedAction);
  });

  it('should set the state for a key which can back navigate', () => {
    const key = 'test_key';
    const can = true;
    const expectedAction = { type: Actions.Navigation.CanBack, can, key };
    expect(navigation.canNavigateBack(key, can)).toEqual(expectedAction);
  });

  it('should create an action to switch the find view', () => {
    const view = 1;
    const expectedAction = { type: Actions.App.SwitchFindView, view };
    expect(navigation.switchFindView(view)).toEqual(expectedAction);
  });

  it('should create an action to switch the discover view', () => {
    const view = 1;
    const expectedAction = { type: Actions.App.SwitchDiscoverView, view };
    expect(navigation.switchDiscoverView(view)).toEqual(expectedAction);
  });

  it('should create an action to switch the housing view', () => {
    const view = 1;
    const expectedAction = { type: Actions.App.SwitchHousingView, view };
    expect(navigation.switchHousingView(view)).toEqual(expectedAction);
  });

  it('should show a link category', () => {
    const linkId = 'fake_id';
    const expectedAction = { type: Actions.App.SwitchDiscoverLink, linkId };
    expect(navigation.switchLinkCategory(linkId)).toEqual(expectedAction);
  });

  it('should show a transit campus', () => {
    const campus: any = {
      image: 'image.jpg',
      name: 'campus_name',
    };
    const expectedAction = { type: Actions.App.SwitchDiscoverTransitCampus, campus };
    expect(navigation.switchTransitCampus(campus)).toEqual(expectedAction);
  });

  it('should show a residence', () => {
    const residence: any = {
      image: 'image.jpg',
      name: 'residence_name',
    };
    const expectedAction = { type: Actions.App.SwitchHousingResidence, residence };
    expect(navigation.switchResidence(residence)).toEqual(expectedAction);
  });

});
