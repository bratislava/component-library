import { Alert } from '../../lib/main'

/**
 * Showcase component for an alert message with different types and variants.
 *
 * Alert supports these props:
 * @param type - (required) The type of the alert. Can be 'error', 'success', 'info', or 'warning'.
 * @param message - (required) The main message / title of the alert.
 * @param variant - (optional) The variant of the alert. Can be 'basic' or 'message'. Default is 'basic'.
 * @param content - (optional) The additional content of the alert, used to give additional information to the user. Used when variant is 'message'.
 * @param solid - (optional) A boolean indicating whether the alert has a solid color background. Default is false.
 * @param close - (optional) A function to close the alert.
 * @param buttons - (optional) An array of buttons with their titles and click handlers.
 *
 * @example
 * ```tsx
 *  <Alert
 *      message="Alert text"
 *      solid
 *      type="warning"
 *      buttons={[
 *        { title: 'Button', handler: () => {} },
 *        { title: 'Button', handler: () => {} },
 *      ]}
 *      variant="message"
 *      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
 *   />
 * ```
 *
 * @component
 */

const ShowcaseAlert = () => {
  return (
    <div className="md:pt-100 mx-auto max-w-screen-lg pb-64 md:px-12">
      <h1>Alert component show case</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-800 p-5">
          <Alert message="Alert text" type="error" />
          <Alert message="Alert text" type="success" />
          <Alert message="Alert text" type="info" />
          <Alert message="Alert text" type="warning" />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-800 p-5">
          <Alert message="Alert text" type="error" close={() => {}} />
          <Alert message="Alert text" type="success" close={() => {}} />
          <Alert message="Alert text" type="info" close={() => {}} />
          <Alert message="Alert text" type="warning" close={() => {}} />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-800 p-5">
          <Alert message="Alert text" type="error" solid />
          <Alert message="Alert text" type="success" solid />
          <Alert message="Alert text" type="info" solid />
          <Alert message="Alert text" type="warning" solid />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-800 p-5">
          <Alert message="Alert text" type="error" close={() => {}} solid />
          <Alert message="Alert text" type="success" close={() => {}} solid />
          <Alert message="Alert text" type="info" close={() => {}} solid />
          <Alert message="Alert text" type="warning" close={() => {}} solid />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-800 p-5">
          <Alert
            message="Alert text"
            type="error"
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Alert
            message="Alert text"
            type="success"
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Alert
            message="Alert text"
            type="info"
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Alert
            message="Alert text"
            type="warning"
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-800 p-5">
          <Alert
            message="Alert text"
            solid
            type="error"
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Alert
            message="Alert text"
            solid
            type="success"
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Alert
            message="Alert text"
            solid
            type="info"
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Alert
            message="Alert text"
            solid
            type="warning"
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-800 p-5">
          <Alert
            message="Alert text"
            type="error"
            buttons={[
              { title: 'Button', handler: () => {} },
              { title: 'Button', handler: () => {} },
            ]}
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Alert
            message="Alert text"
            type="success"
            buttons={[
              { title: 'Button', handler: () => {} },
              { title: 'Button', handler: () => {} },
            ]}
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Alert
            message="Alert text"
            type="info"
            buttons={[
              { title: 'Button', handler: () => {} },
              { title: 'Button', handler: () => {} },
            ]}
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Alert
            message="Alert text"
            type="warning"
            buttons={[
              { title: 'Button', handler: () => {} },
              { title: 'Button', handler: () => {} },
            ]}
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-800 p-5">
          <Alert
            message="Alert text"
            solid
            type="error"
            buttons={[
              { title: 'Button', handler: () => {} },
              { title: 'Button', handler: () => {} },
            ]}
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Alert
            message="Alert text"
            solid
            type="success"
            buttons={[
              { title: 'Button', handler: () => {} },
              { title: 'Button', handler: () => {} },
            ]}
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Alert
            message="Alert text"
            solid
            type="info"
            buttons={[
              { title: 'Button', handler: () => {} },
              { title: 'Button', handler: () => {} },
            ]}
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Alert
            message="Alert text"
            solid
            type="warning"
            buttons={[
              { title: 'Button', handler: () => {} },
              { title: 'Button', handler: () => {} },
            ]}
            variant="message"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  )
}

export default ShowcaseAlert
