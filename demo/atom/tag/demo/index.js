import React from 'react'
import AtomTag, {atomTagSizes} from '../../../../components/atom/tag/src'
import {CloseIcon, Icon} from './icons'

export default () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1 className="sui-Studio-h1">Tag</h1>
      <p className="sui-Studio-h4">Lorem ipsum dolor sit amet...</p>
      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Size</h2>
        <p className="sui-Studio-p">
          There are three options for{' '}
          <code className="sui-Studio-code">size</code>
          <code className="sui-Studio-code">size</code>
          The are thre options of si
        </p>
        <table>
          <tr>
            <td className="sui-Studio-label">Large</td>
            <td>
              <AtomTag label="Tag Structure" size={atomTagSizes.LARGE} />
              <AtomTag
                closeIcon={<CloseIcon />}
                label="Close Tag"
                size={atomTagSizes.LARGE}
              />
              <AtomTag
                icon={<Icon />}
                label="Icon Tag"
                size={atomTagSizes.LARGE}
              />{' '}
              <AtomTag
                closeIcon={<CloseIcon />}
                icon={<Icon />}
                label="Icon & Close Tag"
                size={atomTagSizes.LARGE}
              />
            </td>
          </tr>
          <tr>
            <td className="sui-Studio-label">Medium</td>
            <td>
              <AtomTag label="Tag Structure" size={atomTagSizes.MEDIUM} />
              <AtomTag
                closeIcon={<CloseIcon />}
                label="Close Tag"
                size={atomTagSizes.MEDIUM}
              />
              <AtomTag
                icon={<Icon />}
                label="Icon Tag"
                size={atomTagSizes.MEDIUM}
              />{' '}
              <AtomTag
                closeIcon={<CloseIcon />}
                icon={<Icon />}
                label="Icon & Close Tag"
                size={atomTagSizes.MEDIUM}
              />
            </td>
          </tr>
          <tr>
            <td className="sui-Studio-label">Small</td>
            <td>
              <AtomTag label="Tag Structure" size={atomTagSizes.SMALL} />
              <AtomTag
                closeIcon={<CloseIcon />}
                label="Close Tag"
                size={atomTagSizes.SMALL}
              />
              <AtomTag
                icon={<Icon />}
                label="Icon Tag"
                size={atomTagSizes.SMALL}
              />{' '}
              <AtomTag
                closeIcon={<CloseIcon />}
                icon={<Icon />}
                label="Icon & Close Tag"
                size={atomTagSizes.SMALL}
              />
            </td>
          </tr>
        </table>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Types</h2>
        <p className="sui-Studio-p">
          Use the <code className="sui-Studio-code">type</code> in order to
          color it as desired from a high order component.
        </p>
        <div>
          <AtomTag label="Sale" type="warning" />
          <AtomTag label="Special" type="special" />
          <AtomTag label="5 min ago" type="date" />
        </div>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Actionable</h2>
        <p className="sui-Studio-p">
          Use the <code className="sui-Studio-code">type</code> in order to
          color it as desired from a high order component.
        </p>
        <div>
          <AtomTag
            label="Navigation Tag"
            onClick={() => window.alert('click!')}
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            label="Anchor Tag"
            target="_blank"
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="right"
            label="Icon placement right"
            target="_blank"
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="left"
            label="Icon placement left"
            target="_blank"
          />
        </div>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Icons</h2>
        <p className="sui-Studio-p">
          Use the <code className="sui-Studio-code">icon</code>.
        </p>
        <div>
          <AtomTag
            icon={<Icon />}
            iconPlacement="left"
            label="Icon placement left"
          />
          <AtomTag
            closeIcon={<CloseIcon />}
            icon={<Icon />}
            label="Icon & Close Tag"
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="right"
            label="Icon placement right"
            target="_blank"
          />
        </div>

        <p>
          Only actionable tags can have{' '}
          <code className="sui-Studio-code">iconPlacement="right"</code>
        </p>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Responsive</h2>
        <p className="sui-Studio-p">
          Use the <code className="sui-Studio-code">responsive</code> true for
          make responsive layout. keep large size in mobile.
        </p>
        <div>
          <AtomTag
            closeIcon={<CloseIcon />}
            icon={<Icon />}
            label="Icon & Close Tag"
            onClose={() => window.alert('close!')}
            responsive
            size={atomTagSizes.SMALL}
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="right"
            label="Icon placement right"
            responsive
            target="_blank"
          />
          <AtomTag
            closeIcon={<CloseIcon />}
            icon={<Icon />}
            label="Icon & Close Tag"
            onClose={() => window.alert('close!')}
            responsive
          />
          <AtomTag
            closeIcon={<CloseIcon />}
            icon={<Icon />}
            label="Icon & Close Tag"
            onClose={() => window.alert('close!')}
            responsive
            size={atomTagSizes.LARGE}
          />
        </div>
      </div>
    </div>
  </div>
)
