import { tagsSlider, casesSlider } from "./slider";
import cases from "./cases";
import tagFilter from "./tagFilter";

const casesData = [
  {
    id: 1,
    tags: [{
      category: 1,
      name: 'SMB'
    }, {
      category: 3,
      name: 'Information Technology'
    }],
    time: '7 min read',
    title: 'How Serial 1 Built a Procurement Ecosystem with Precoro’s Core Modules and Extensions',
    image: '#4545F5'
  }, {
    id: 2,
    tags: [{
      category: 1,
      name: 'SMB'
    }, {
      category: 3,
      name: 'Biotech'
    }],
    time: '7 min read',
    title: 'How Ridgeline Discovery Reduced Invoice Processing Time by 90% in a Month',
    image: '#1D2452'
  }, {
    id: 3,
    tags: [{
      category: 2,
      name: 'Enterprise'
    }, {
      category: 3,
      name: 'Textile Testing & Certification'
    }],
    time: '5 min read',
    title: 'How TESTEX Increased Order Processing Speed by Threefold',
    image: '#7B61FF'
  }, {
    id: 4,
    tags: [{
      category: 1,
      name: 'SMB'
    }, {
      category: 3,
      name: 'Agriculture, Laboratory Services'
    }],
    time: '3 min read',
    title: 'Cropnuts Uses Precoro to Streamline Requisitioning and Get Rid of Human Error',
    image: '#9747FF'
  }, {
    id: 5,
    tags: [{
      category: 2,
      name: 'Enterprise'
    }, {
      category: 3,
      name: 'Insurance'
    }],
    time: '5 min read',
    title: 'How PassportCard Consolidated Multiple Subsidiaries and Locations under One Sustainable Procurement Workflow',
    image: '#F5455A'
  }, {
    id: 6,
    tags: [{
      category: 1,
      name: 'SMB'
    }, {
      category: 3,
      name: 'Travel & Tourism, Leisure'
    }],
    time: '5 min read',
    title: 'How Greater Palm Springs CVB Achieved Operational Efficiency in the Procurement Process',
    image: '#4ED0FF'
  }
];

tagsSlider();
cases(casesData);
tagFilter(casesData);