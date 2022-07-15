import { css } from '@emotion/css'

export default css`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;

  .vertical_line {
    height: 450px;
    width: 2px;
    background: #a1a1a1;
    margin: 20px 100px;
  }

  .box__container {
    width: 300px;
    height: 500px;

    .inner__box {
      height: 450px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      position: relative;
      border-radius: 12px;
      /* border: 2px solid #333; */
      padding: 20px;
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      font-family: -apple-system, 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      font-weight: 100;

      h2 {
        margin: 0;
        font-weight: inherit;
        margin-bottom: 50px;
      }

      input {
        width: calc(100% - 24px);
        padding: 12px;
        margin-bottom: 16px;
        border-radius: 8px;
        border: none;
        background-color: #ddd;
        outline: none;
        transition: all 0.2s;

        &:hover {
          background-color: #cacaca;
        }

        &:focus {
          background-color: #b1b1b1;
        }
      }

      .btn-submit {
        background-color: #ff8c32;
        padding: 6px 20px;
        border-radius: 8px;
        margin: 16px 0px 16px auto;
        display: flex;
        width: fit-content;
        cursor: pointer;
        box-shadow: #ff8c32 0px 6px 20px -3px;
        color: #fff;
      }

      .bottom__sheet {
        position: absolute;
        bottom: 0px;
        height: 60px;
        left: 0;
        right: 0;
        background-color: #eee;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;

        .material-symbols-outlined {
          background-color: #ff8c32;
          padding: 6px 20px;
          border-radius: 8px;
          margin: -16px 20px 0 auto;
          display: flex;
          width: fit-content;
          cursor: pointer;
          box-shadow: #ff8c32 0px 6px 20px -3px;
          color: #fff;

          &:hover {
            background-color: #e57822;
          }
          &:active {
            background-color: #c15c0e;
            box-shadow: none;
          }
        }
      }

      .btn__logout {
        border: none;
        padding: 8px 24px;
        border-radius: 5px;
        background-color: #51bbfe;
        color: #fff;
        cursor: pointer;

        &:hover {
          background-color: #0ba1fe;
        }

        &:active {
          background-color: #01588e;
        }
      }
    }

    p.version {
      color: rgba(6, 24, 44, 0.4);
      font-size: 10px;
      text-align: center;
      margin-top: 12px;
    }
  }
`
