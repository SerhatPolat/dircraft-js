export function component(name) {
  return `export interface I${name} {
  text: string;
}
  
const ${name}: React.FC<I${name}> = ({ text }) => {
  return <p className="bg-black text-red-500">{text}</p>;
};
  
export default ${name};
`;
}

export function story(name) {
  return `import { ComponentMeta, ComponentStory } from "@storybook/react";
import ${name}, { I${name} } from "./${name}";
import { mock${name}Props } from "./${name}.mocks";

export default {
  title: "${name}",
  component: ${name},
  argTypes: {},
} as ComponentMeta<typeof ${name}>;

const Template: ComponentStory<typeof ${name}> = (args) => (
  <${name} {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mock${name}Props.base,
} as I${name};
`;
}

export function mockProps(name) {
  return `import { I${name} } from "./${name}";

const base: I${name} = {
  text: "Example",
};

export const mock${name}Props = {
  base,
};
`;
}

export function test(name) {
  return `import { render } from '@testing-library/react';
import ${name} from './${name}';

describe('${name} Component Tests', () => {
  test('it should handle positive case', () => {
    const { asFragment } = render(<${name} />);
    
    // WRITE POSITIVE CASE TEST SCENARIO
  });

  test('it should handle negative case', () => {
    const { asFragment } = render(<${name} />);
    
    // WRITE NEGATIVE CASE TEST SCENARIO
  });
});
`;
}
