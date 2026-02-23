"""
Minions Social-accounts SDK — Type Schemas
Custom MinionType schemas for Minions Social-accounts.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

social_account_type = MinionType(
    id="social-accounts-social-account",
    name="Social account",
    slug="social-account",
    description="A social media account managed by the system.",
    icon="📱",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="handle", type="string", label="handle"),
        FieldDefinition(name="purpose", type="string", label="purpose"),
        FieldDefinition(name="namespace", type="string", label="namespace"),
        FieldDefinition(name="apiKeyRef", type="string", label="apiKeyRef"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

account_group_type = MinionType(
    id="social-accounts-account-group",
    name="Account group",
    slug="account-group",
    description="A logical grouping of accounts by purpose.",
    icon="👥",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="accountIds", type="string", label="accountIds"),
        FieldDefinition(name="purpose", type="string", label="purpose"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

content_mode_config_type = MinionType(
    id="social-accounts-content-mode-config",
    name="Content mode config",
    slug="content-mode-config",
    description="Per-account config for text/image/video generation modes.",
    icon="⚙️",
    schema=[
        FieldDefinition(name="accountId", type="string", label="accountId"),
        FieldDefinition(name="textMode", type="select", label="textMode"),
        FieldDefinition(name="imageMode", type="select", label="imageMode"),
        FieldDefinition(name="videoMode", type="select", label="videoMode"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

custom_types: list[MinionType] = [
    social_account_type,
    account_group_type,
    content_mode_config_type,
]

