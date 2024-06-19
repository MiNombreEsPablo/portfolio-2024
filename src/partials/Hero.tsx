import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hey there! I'm <GradientText>Pablo</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a full stack developer, with expertise in strategic project
          management and web development. I've successfully scaled startups by
          implementing data-driven strategies.
          <br /> I'm looking to put my business and technical skills to use as a
          full stack developer. <br />
          <br />
          <b>💬 Let's Connect</b>
          {/* <a className="text-cyan-400 hover:underline" href="/">
            url example
          </a>{' '} */}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.png"
          alt="Avatar"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/pablobugueno/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin logo"
            />
          </a>
          <a href="https://github.com/MiNombreEsPablo">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github logo"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
