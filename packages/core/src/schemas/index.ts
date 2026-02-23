/**
 * @module @minions-social-accounts/sdk/schemas
 * Custom MinionType schemas for Minions Social-accounts.
 */

import type { MinionType } from 'minions-sdk';

export const socialaccountType: MinionType = {
  id: 'social-accounts-social-account',
  name: 'Social account',
  slug: 'social-account',
  description: 'A social media account managed by the system.',
  icon: '📱',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'handle', type: 'string', label: 'handle' },
    { name: 'purpose', type: 'string', label: 'purpose' },
    { name: 'namespace', type: 'string', label: 'namespace' },
    { name: 'apiKeyRef', type: 'string', label: 'apiKeyRef' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const accountgroupType: MinionType = {
  id: 'social-accounts-account-group',
  name: 'Account group',
  slug: 'account-group',
  description: 'A logical grouping of accounts by purpose.',
  icon: '👥',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'accountIds', type: 'string', label: 'accountIds' },
    { name: 'purpose', type: 'string', label: 'purpose' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const contentmodeconfigType: MinionType = {
  id: 'social-accounts-content-mode-config',
  name: 'Content mode config',
  slug: 'content-mode-config',
  description: 'Per-account config for text/image/video generation modes.',
  icon: '⚙️',
  schema: [
    { name: 'accountId', type: 'string', label: 'accountId' },
    { name: 'textMode', type: 'select', label: 'textMode' },
    { name: 'imageMode', type: 'select', label: 'imageMode' },
    { name: 'videoMode', type: 'select', label: 'videoMode' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const customTypes: MinionType[] = [
  socialaccountType,
  accountgroupType,
  contentmodeconfigType,
];

