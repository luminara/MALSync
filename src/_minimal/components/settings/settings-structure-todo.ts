import { ConfObj } from '../../../_provider/definitions';
import SettingsGeneral from './settings-general.vue';

export const todo: ConfObj[] = [
  {
    key: 'malThumbnail',
    title: () => api.storage.lang('settings_Thumbnails'),
    props: () => ({
      component: 'dropdown',
      tooltip: api.storage.lang('settings_Thumbnails_text'),
      option: 'malThumbnail',
      props: {
        options: [
          { title: api.storage.lang('settings_Thumbnails_Large'), value: '144' },
          { title: api.storage.lang('settings_Thumbnails_Medium'), value: '100' },
          { title: api.storage.lang('settings_Thumbnails_Small'), value: '60' },
          { title: api.storage.lang('settings_Thumbnails_Default'), value: '0' },
        ],
      },
    }),
    component: SettingsGeneral,
  },
  {
    key: 'friendScore',
    title: () => api.storage.lang('settings_FriendScore'),
    props: {
      component: 'checkbox',
      option: 'friendScore',
    },
    component: SettingsGeneral,
  },
  {
    key: 'anilistUpdateUi',
    title: () => api.storage.lang('settings_anilist_update_ui'),
    props: {
      component: 'checkbox',
      option: 'anilistUpdateUi',
    },
    component: SettingsGeneral,
  },
  {
    key: 'epPredictions',
    title: () => api.storage.lang('settings_epPredictions'),
    props: {
      component: 'checkbox',
      option: 'epPredictions',
    },
    component: SettingsGeneral,
  },
  {
    key: 'malTags',
    title: () => api.storage.lang('settings_malTags'),
    props: () => ({
      component: 'checkbox',
      tooltip: api.storage.lang('settings_malTags_text'),
      option: 'malTags',
    }),
    component: SettingsGeneral,
  },
  {
    key: 'malContinue',
    title: () => api.storage.lang('settings_malContinue'),
    props: {
      component: 'checkbox',
      option: 'malContinue',
    },
    component: SettingsGeneral,
  },
  {
    key: 'malResume',
    title: () => api.storage.lang('settings_malResume'),
    props: {
      component: 'checkbox',
      option: 'malResume',
    },
    component: SettingsGeneral,
  },
  {
    key: 'usedPage',
    title: () => api.storage.lang('settings_usedPage'),
    props: {
      component: 'checkbox',
      option: 'usedPage',
    },
    component: SettingsGeneral,
  },
  {
    key: 'floatButtonStealth',
    title: () => api.storage.lang('settings_miniMAL_floatButtonStealth'),
    props: {
      component: 'checkbox',
      option: 'floatButtonStealth',
    },
    component: SettingsGeneral,
  },
  {
    key: 'minimizeBigPopup',
    title: () => api.storage.lang('settings_miniMAL_minimizeBigPopup'),
    props: {
      component: 'checkbox',
      option: 'minimizeBigPopup',
    },
    component: SettingsGeneral,
  },
  {
    key: 'floatButtonHide',
    title: () => api.storage.lang('settings_miniMAL_floatButtonHide'),
    props: {
      component: 'checkbox',
      option: 'floatButtonHide',
    },
    component: SettingsGeneral,
  },
  {
    key: 'highlightAllEp',
    title: () => api.storage.lang('settings_highlightAllEp'),
    props: () => ({
      component: 'checkbox',
      tooltip: api.storage.lang('settings_highlightAllEp_Text'),
      option: 'highlightAllEp',
    }),
    component: SettingsGeneral,
  },
  {
    key: 'checkForFiller',
    title: () => api.storage.lang('settings_filler'),
    system: 'webextension',
    props: () => ({
      component: 'checkbox',
      tooltip: api.storage.lang('settings_filler_text'),
      option: 'checkForFiller',
    }),
    component: SettingsGeneral,
  },
];
