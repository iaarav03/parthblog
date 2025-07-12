import type { Schema, Struct } from '@strapi/strapi';

export interface TitlePointItem extends Struct.ComponentSchema {
  collectionName: 'components_title_point_items';
  info: {
    displayName: 'pointItem';
  };
  attributes: {
    icon_type: Schema.Attribute.Enumeration<
      [
        'highway',
        'metro_station',
        'airport',
        'bullet_train_station',
        'hospital',
        'mall',
        'school',
        'university',
        'gym',
        'restaurant',
        'park',
        'beach',
        'temple',
        'generic_location',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'generic_location'>;
    minutes: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface TitleSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_title_section_items';
  info: {
    displayName: 'sectionItem';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TitleSection2AmenityItem extends Struct.ComponentSchema {
  collectionName: 'components_title_section2_amenity_items';
  info: {
    displayName: 'section2AmenityItem';
  };
  attributes: {
    icon_type: Schema.Attribute.Enumeration<
      [
        'gym',
        'swimming_pool',
        'parking',
        'security',
        'elevator',
        'garden',
        'playground',
        'clubhouse',
        'sports_complex',
        'spa',
        'restaurant',
        'shopping',
        'library',
        'wifi',
        'power_backup',
        'water_supply',
        'waste_management',
        'fire_safety',
        'cctv',
        'intercom',
        'generic_amenity',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'generic_amenity'>;
    point_text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TitleSection2Intro extends Struct.ComponentSchema {
  collectionName: 'components_title_section2_intros';
  info: {
    displayName: 'section2Intro';
  };
  attributes: {
    description: Schema.Attribute.Text;
    short_text: Schema.Attribute.String;
    TItle: Schema.Attribute.String;
  };
}

export interface TitleSection2Media extends Struct.ComponentSchema {
  collectionName: 'components_title_section2_medias';
  info: {
    displayName: 'section2Media';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

export interface TitleSection2Points extends Struct.ComponentSchema {
  collectionName: 'components_title_section2_points';
  info: {
    displayName: 'section2Points';
  };
  attributes: {
    amenity_items: Schema.Attribute.Component<
      'title.section2-amenity-item',
      true
    >;
  };
}

export interface TitleSection3Intro extends Struct.ComponentSchema {
  collectionName: 'components_title_section3_intros';
  info: {
    displayName: 'section3Intro';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface TitleSection3Points extends Struct.ComponentSchema {
  collectionName: 'components_title_section3_points';
  info: {
    displayName: 'section3Points';
  };
  attributes: {
    point_items: Schema.Attribute.Component<'title.point-item', true>;
  };
}

export interface TitleSections extends Struct.ComponentSchema {
  collectionName: 'components_title_sections';
  info: {
    displayName: 'sections';
  };
  attributes: {
    section_items: Schema.Attribute.Component<'title.section-item', true> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'title.point-item': TitlePointItem;
      'title.section-item': TitleSectionItem;
      'title.section2-amenity-item': TitleSection2AmenityItem;
      'title.section2-intro': TitleSection2Intro;
      'title.section2-media': TitleSection2Media;
      'title.section2-points': TitleSection2Points;
      'title.section3-intro': TitleSection3Intro;
      'title.section3-points': TitleSection3Points;
      'title.sections': TitleSections;
    }
  }
}
