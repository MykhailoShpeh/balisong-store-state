import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
    return (
        <section>
            {/* <h2>{title}</h2> */}
            {/* //! Рендер за умовою: */}
            {title && <h2 className='title'>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;