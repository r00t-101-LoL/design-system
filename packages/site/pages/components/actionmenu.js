import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
import Button from '@pluralsight/ps-design-system-button/react'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Link,
  P,
  PageHeading,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ =>
  <Chrome>
    <Content title="Action Menu">
      <PageHeading beta packageName="actionmenu">
        Action Menu
      </PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-actionmenu
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
      </Code>

      <SectionHeading>Triggers</SectionHeading>
      <P>
        Menus can originate from various affordance types: buttons, dropdowns,
        and stand-alone icons. All menus left align with the affordance by
        default.
      </P>
      <Example.React
        includes={{ ActionMenu, Button, Icon }}
        codes={[
          `
<div>
  <Button
    appearance={Button.appearances.flat}
    size={Button.sizes.small}
    icon={<Icon id={Icon.ids.more} />}
  />
  <div style={{ position: 'relative' }}>
    <ActionMenu css={{ position: 'relative' }}>
      <ActionMenu.Item>
        One menu item
      </ActionMenu.Item>
      <ActionMenu.Item>
        Two menu item
      </ActionMenu.Item>
      <ActionMenu.Item>
        Three menu item
      </ActionMenu.Item>
    </ActionMenu>
  </div>
</div>
`
        ]}
      />

      <SectionHeading>Icons</SectionHeading>
      <P>Use icons to add conext and recognition to action menu items.</P>
      <Example.React
        includes={{ ActionMenu, Icon }}
        codes={[
          `
<ActionMenu css={{ position: 'relative' }}>
  <ActionMenu.Item iconId={Icon.ids.channel}>
    Channels
  </ActionMenu.Item>
  <ActionMenu.Item iconId={Icon.ids.path}>
    Paths
  </ActionMenu.Item>
  <ActionMenu.Item iconId={Icon.ids.report}>
    Reports
  </ActionMenu.Item>
</ActionMenu>
`
        ]}
      />

      <SectionHeading>Dividers</SectionHeading>
      <P>
        Dividers can be useful to separate similar actions. Dividers are applied
        at the li level, below the assigned list item.
      </P>
      <Example.React
        includes={{ ActionMenu }}
        codes={[
          `
<ActionMenu css={{ position: 'relative' }}>
  <ActionMenu.Item>
    One item
  </ActionMenu.Item>
  <ActionMenu.Divider />
  <ActionMenu.Item>
    Two item
  </ActionMenu.Item>
  <ActionMenu.Item>
    Three item
  </ActionMenu.Item>
  <ActionMenu.Divider />
  <ActionMenu.Item>
    Four item
  </ActionMenu.Item>
</ActionMenu>
`
        ]}
      />

      <SectionHeading>Nesting</SectionHeading>
      <P>Nested menu lists may spawn from parent menu list items.</P>
      <Example.React
        includes={{ ActionMenu }}
        outputChildStyle={{
          padding: `0 0 ${core.layout.spacingLarge} 0`
        }}
        codes={[
          `
<ActionMenu css={{ position: 'relative' }}>
  <ActionMenu.Item>
    One item
  </ActionMenu.Item>
  <ActionMenu.Divider />
  <ActionMenu.Item
    nested={
      <ActionMenu>
        <ActionMenu.Item>
          Nest 1
        </ActionMenu.Item>
        <ActionMenu.Item
          nested={
            <ActionMenu>
              <ActionMenu.Item>
                Nest nest 1-1
              </ActionMenu.Item>
              <ActionMenu.Item>
                Nest nest 1-2
              </ActionMenu.Item>
              <ActionMenu.Item>
                Nest nest 1-3
              </ActionMenu.Item>
            </ActionMenu>
          }
        >
          Nest 2
        </ActionMenu.Item>
        <ActionMenu.Divider />
        <ActionMenu.Item
          nested={
            <ActionMenu>
              <ActionMenu.Item>
                Nest nest 3-1
              </ActionMenu.Item>
              <ActionMenu.Item>
                Nest nest 3-2
              </ActionMenu.Item>
            </ActionMenu>
          }
        >
          Nest 3
        </ActionMenu.Item>
      </ActionMenu>
    }
  >
    Two item
  </ActionMenu.Item>
  <ActionMenu.Item>
    Three item
  </ActionMenu.Item>
  <ActionMenu.Divider />
  <ActionMenu.Item>
    Four item
  </ActionMenu.Item>
</ActionMenu>
`
        ]}
      />

      <SectionHeading>Origin</SectionHeading>
      <P>
        The origin prop determines the starting position and direction of nested
        menus.
      </P>
      <Code language="javascript">
        {Object.keys(ActionMenu.origins)
          .reduce(
            (acc, origin) => acc.concat([`ActionMenu.origins.${origin}`]),
            []
          )
          .join('\n')}
      </Code>
      <P>Here's an example of ActionMenu.origins.bottomRight in action:</P>
      <Example.React
        includes={{ ActionMenu }}
        outputStyle={{
          height: `calc(200px + (2 * ${core.layout.spacingLarge}))`,
          position: 'relative'
        }}
        outputChildStyle={{
          position: 'relative',
          height: '200px',
          width: '100%',
          padding: core.layout.spacingLarge
        }}
        codes={[
          `
<ActionMenu origin={ActionMenu.origins.bottomRight}>
  <ActionMenu.Item>
    One item
  </ActionMenu.Item>
  <ActionMenu.Divider />
  <ActionMenu.Item>
    Two item
  </ActionMenu.Item>
  <ActionMenu.Item>
    Three item
  </ActionMenu.Item>
</ActionMenu>
`
        ]}
      />
    </Content>
  </Chrome>
)
