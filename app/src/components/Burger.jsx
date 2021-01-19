// https://build-in-saratov.com/hamburger-menu/
import { css } from '@emotion/react';

const Burger = ( { onClick, } ) => {
  const burger_color_default = '#fff';
  const burger_color_active = '#fff';
  const burger_transition_time = '0.5s';

  const styles_burger = css`

		display: inline-flex;
		align-self: center;
		flex-direction: column;

		position: absolute;
		z-index: 3;
		top: 0px;
		right: 0px;

		button{
			display: inline-block;
			position: relative;
			height: 30px;
			width: 30px;
			background-color: transparent;
			transition: ${ burger_transition_time } transform, ${ burger_transition_time } background-color;
			z-index: 1;
			background-color: transparent;
			cursor: pointer;

			span{
				position: absolute;
				background-color: ${ burger_color_default };
				left: 50%;
				transform: translate(-50%, 0);
				display: block;
				height: 1px;
				width: 25px;
				transition: all ${ burger_transition_time } ease;
				pointer-events: none;

				&:nth-of-type(1){
					top: 6px;
				}
				&:nth-of-type(2){
					top: 12px;
				}
				&:nth-of-type(3){
					top: 18px;
				}
				&:nth-of-type(4){
					top: 24px;
				}
			}

			&.active{
				span{
					&:nth-of-type(1){
						transform: rotatez(45deg);
						transform-origin: 0%;
						left: 5px;
						background-color: ${ burger_color_active };
					}
					&:nth-of-type(2){
						opacity: 0;
					}
					&:nth-of-type(3){
						opacity: 0;
					}
					&:nth-of-type(4){
						transform: rotatez(-45deg);
						transform-origin: 0%;
						left: 5px;
						background-color: ${ burger_color_active };
					}
				}
			}
		}

		@media ( min-width: 768px ){
			display: none;
		}
	`;

  return (
    <div className="burger" css={ styles_burger } data-cy="mmenu-btn">
      <button
        aria-label="open/close navigation"
        onClick = { ( e ) => onClick( e ) }
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Burger;