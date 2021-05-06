import {
  PLUGIN_MODERATION_COMPONENTS,
  PLUGIN_MODERATION_SERVICE,
} from "metabase/plugins";
import { ACTIONS } from "metabase-enterprise/moderation/constants";
import ModerationIssueActionMenu from "metabase-enterprise/moderation/components/ModerationIssueActionMenu";
import CreateModerationIssuePanel from "metabase-enterprise/moderation/components/CreateModerationIssuePanel";
import { OpenModerationIssuesButton } from "metabase-enterprise/moderation/components/OpenModerationIssuesButton";
import { OpenModerationIssuesPanel } from "metabase-enterprise/moderation/components/OpenModerationIssuesPanel";

Object.assign(PLUGIN_MODERATION_COMPONENTS, {
  ModerationIssueActionMenu,
  CreateModerationIssuePanel,
  OpenModerationIssuesButton,
  OpenModerationIssuesPanel,
});

Object.assign(PLUGIN_MODERATION_SERVICE, {
  getModerationStatusIcon,
});

export function getModerationIssueTypes() {
  return ["verification", "flag", "question"];
}

export function getModerationRequestActionTypes() {
  return ["verification", "flag", "question", "dismiss"];
}

export function getModerationStatusIcon(type) {
  const { icon } = ACTIONS[type] || {};
  return icon;
}

export function getColor(type) {
  const { color } = ACTIONS[type] || {};
  return color;
}

export function getOpenIssues() {
  return [
    {
      id: 1,
      type: "verification",
      title: "John Foo",
      text: "1111111\n2\n3333333333\n4\n5555555\n6",
      timestamp: Date.now(),
      comments: [],
    },
    {
      id: 2,
      type: "flag",
      title: "ABC 123",
      text: "aaaaaaaaaa bbbbbb cccc d ee",
      timestamp: Date.now(),
      comments: [
        {
          id: 1,
          title: "Mister Moderator",
          isModerator: true,
          text: "idk",
          timestamp: Date.now(),
        },
      ],
    },
  ];
}
