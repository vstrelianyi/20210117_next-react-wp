import { css } from '@emotion/react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const styles_SocialIcons = css`
	display: flex;
`;

const SocialIcons = ( { social, } ) => {
  return (
    <ul className="social-icons" css={ styles_SocialIcons }>
      { social?.facebook.url && <li>
        <a href={ social?.facebook.url } target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
      </li> }

      { social?.instagram.url &&
      <li>
        <a href={ social?.instagram.url } target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
      </li> }

      { social?.youTube.url &&
      <li>
        <a href={ social?.youTube.url } target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
      </li> }

      { social?.twitter.url &&
      <li>
        <a href={ social?.twitter.url } target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
      </li> }

      { social?.twitter.username &&
      <li>
        <a href={ social?.twitter.username } target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
      </li> }
    </ul>
  );
};

export default SocialIcons;