import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Story Lab"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="https://story-lab-966dda447a15.herokuapp.com/"
        img={{
          src: '/assets/images/story-lab.png',
          alt: 'Story Lab logo',
        }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Web Development</Tags>
            <Tags color={ColorTags.RED}>Ruby on Rails</Tags>
            <Tags color={ColorTags.TEAL}>PostgreSQL</Tags>
            <Tags color={ColorTags.PURPLE}>Heroku</Tags>
          </>
        }
      />
      <Project
        name="GearShare"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="https://gearshare-knich872-bcc37dc3c7bc.herokuapp.com/"
        img={{ src: '/assets/images/gear-share.png', alt: 'GearShare logo' }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Web Development</Tags>
            <Tags color={ColorTags.RED}>Ruby on Rails</Tags>
            <Tags color={ColorTags.TEAL}>PostgreSQL</Tags>
            <Tags color={ColorTags.PURPLE}>Heroku</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
