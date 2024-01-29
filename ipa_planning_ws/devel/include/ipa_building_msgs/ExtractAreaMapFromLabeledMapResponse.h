// Generated by gencpp from file ipa_building_msgs/ExtractAreaMapFromLabeledMapResponse.msg
// DO NOT EDIT!


#ifndef IPA_BUILDING_MSGS_MESSAGE_EXTRACTAREAMAPFROMLABELEDMAPRESPONSE_H
#define IPA_BUILDING_MSGS_MESSAGE_EXTRACTAREAMAPFROMLABELEDMAPRESPONSE_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <sensor_msgs/Image.h>

namespace ipa_building_msgs
{
template <class ContainerAllocator>
struct ExtractAreaMapFromLabeledMapResponse_
{
  typedef ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> Type;

  ExtractAreaMapFromLabeledMapResponse_()
    : segmented_area()  {
    }
  ExtractAreaMapFromLabeledMapResponse_(const ContainerAllocator& _alloc)
    : segmented_area(_alloc)  {
  (void)_alloc;
    }



   typedef  ::sensor_msgs::Image_<ContainerAllocator>  _segmented_area_type;
  _segmented_area_type segmented_area;





  typedef boost::shared_ptr< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> const> ConstPtr;

}; // struct ExtractAreaMapFromLabeledMapResponse_

typedef ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<std::allocator<void> > ExtractAreaMapFromLabeledMapResponse;

typedef boost::shared_ptr< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse > ExtractAreaMapFromLabeledMapResponsePtr;
typedef boost::shared_ptr< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse const> ExtractAreaMapFromLabeledMapResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator1> & lhs, const ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator2> & rhs)
{
  return lhs.segmented_area == rhs.segmented_area;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator1> & lhs, const ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace ipa_building_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "030622fb7222ad9ac708ee333dc71378";
  }

  static const char* value(const ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x030622fb7222ad9aULL;
  static const uint64_t static_value2 = 0xc708ee333dc71378ULL;
};

template<class ContainerAllocator>
struct DataType< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "ipa_building_msgs/ExtractAreaMapFromLabeledMapResponse";
  }

  static const char* value(const ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n"
"sensor_msgs/Image segmented_area	# a map that only contains the area which is labeled with segment_of_interest in segmented_map,\n"
"									# the parts of that area are labeled as 255 in this map and the remainder is labeled as inaccessible with 0\n"
"									# data type is a 8bit single-channel image (format 8UC1)\n"
"\n"
"================================================================================\n"
"MSG: sensor_msgs/Image\n"
"# This message contains an uncompressed image\n"
"# (0, 0) is at top-left corner of image\n"
"#\n"
"\n"
"Header header        # Header timestamp should be acquisition time of image\n"
"                     # Header frame_id should be optical frame of camera\n"
"                     # origin of frame should be optical center of camera\n"
"                     # +x should point to the right in the image\n"
"                     # +y should point down in the image\n"
"                     # +z should point into to plane of the image\n"
"                     # If the frame_id here and the frame_id of the CameraInfo\n"
"                     # message associated with the image conflict\n"
"                     # the behavior is undefined\n"
"\n"
"uint32 height         # image height, that is, number of rows\n"
"uint32 width          # image width, that is, number of columns\n"
"\n"
"# The legal values for encoding are in file src/image_encodings.cpp\n"
"# If you want to standardize a new string format, join\n"
"# ros-users@lists.sourceforge.net and send an email proposing a new encoding.\n"
"\n"
"string encoding       # Encoding of pixels -- channel meaning, ordering, size\n"
"                      # taken from the list of strings in include/sensor_msgs/image_encodings.h\n"
"\n"
"uint8 is_bigendian    # is this data bigendian?\n"
"uint32 step           # Full row length in bytes\n"
"uint8[] data          # actual matrix data, size is (step * rows)\n"
"\n"
"================================================================================\n"
"MSG: std_msgs/Header\n"
"# Standard metadata for higher-level stamped data types.\n"
"# This is generally used to communicate timestamped data \n"
"# in a particular coordinate frame.\n"
"# \n"
"# sequence ID: consecutively increasing ID \n"
"uint32 seq\n"
"#Two-integer timestamp that is expressed as:\n"
"# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')\n"
"# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')\n"
"# time-handling sugar is provided by the client library\n"
"time stamp\n"
"#Frame this data is associated with\n"
"string frame_id\n"
;
  }

  static const char* value(const ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.segmented_area);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct ExtractAreaMapFromLabeledMapResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::ipa_building_msgs::ExtractAreaMapFromLabeledMapResponse_<ContainerAllocator>& v)
  {
    s << indent << "segmented_area: ";
    s << std::endl;
    Printer< ::sensor_msgs::Image_<ContainerAllocator> >::stream(s, indent + "  ", v.segmented_area);
  }
};

} // namespace message_operations
} // namespace ros

#endif // IPA_BUILDING_MSGS_MESSAGE_EXTRACTAREAMAPFROMLABELEDMAPRESPONSE_H
