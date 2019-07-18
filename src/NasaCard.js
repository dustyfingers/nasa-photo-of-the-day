import React from 'react';
import { Card } from 'semantic-ui-react';
import Picture from './Picture';

const extra = (
  <a
    href="https://www.nasa.gov"
    className="extra" >
    Go to nasa.gov
  </a >
)

const NasaCard = () => (
  <Card
    image={<Picture />}
    className="NasaCard"
    header='NASA Astronomy Photo of the Day'
    extra={extra}
  />
)

export default NasaCard;