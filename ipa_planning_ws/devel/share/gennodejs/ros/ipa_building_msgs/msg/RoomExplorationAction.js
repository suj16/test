// Auto-generated. Do not edit!

// (in-package ipa_building_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let RoomExplorationActionGoal = require('./RoomExplorationActionGoal.js');
let RoomExplorationActionResult = require('./RoomExplorationActionResult.js');
let RoomExplorationActionFeedback = require('./RoomExplorationActionFeedback.js');

//-----------------------------------------------------------

class RoomExplorationAction {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.action_goal = null;
      this.action_result = null;
      this.action_feedback = null;
    }
    else {
      if (initObj.hasOwnProperty('action_goal')) {
        this.action_goal = initObj.action_goal
      }
      else {
        this.action_goal = new RoomExplorationActionGoal();
      }
      if (initObj.hasOwnProperty('action_result')) {
        this.action_result = initObj.action_result
      }
      else {
        this.action_result = new RoomExplorationActionResult();
      }
      if (initObj.hasOwnProperty('action_feedback')) {
        this.action_feedback = initObj.action_feedback
      }
      else {
        this.action_feedback = new RoomExplorationActionFeedback();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type RoomExplorationAction
    // Serialize message field [action_goal]
    bufferOffset = RoomExplorationActionGoal.serialize(obj.action_goal, buffer, bufferOffset);
    // Serialize message field [action_result]
    bufferOffset = RoomExplorationActionResult.serialize(obj.action_result, buffer, bufferOffset);
    // Serialize message field [action_feedback]
    bufferOffset = RoomExplorationActionFeedback.serialize(obj.action_feedback, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type RoomExplorationAction
    let len;
    let data = new RoomExplorationAction(null);
    // Deserialize message field [action_goal]
    data.action_goal = RoomExplorationActionGoal.deserialize(buffer, bufferOffset);
    // Deserialize message field [action_result]
    data.action_result = RoomExplorationActionResult.deserialize(buffer, bufferOffset);
    // Deserialize message field [action_feedback]
    data.action_feedback = RoomExplorationActionFeedback.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += RoomExplorationActionGoal.getMessageSize(object.action_goal);
    length += RoomExplorationActionResult.getMessageSize(object.action_result);
    length += RoomExplorationActionFeedback.getMessageSize(object.action_feedback);
    return length;
  }

  static datatype() {
    // Returns string type for a message object
    return 'ipa_building_msgs/RoomExplorationAction';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '73208c74aa90769aaf62b3c550c1fa13';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    RoomExplorationActionGoal action_goal
    RoomExplorationActionResult action_result
    RoomExplorationActionFeedback action_feedback
    
    ================================================================================
    MSG: ipa_building_msgs/RoomExplorationActionGoal
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    Header header
    actionlib_msgs/GoalID goal_id
    RoomExplorationGoal goal
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    ================================================================================
    MSG: actionlib_msgs/GoalID
    # The stamp should store the time at which this goal was requested.
    # It is used by an action server when it tries to preempt all
    # goals that were requested before a certain time
    time stamp
    
    # The id provides a way to associate feedback and
    # result message with specific goal requests. The id
    # specified must be unique.
    string id
    
    
    ================================================================================
    MSG: ipa_building_msgs/RoomExplorationGoal
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # Room Exploration action
    # sends an occupancy grid map of a room to the server, which plans a path trough it to cover or inspect the whole room by a device or camera
    
    # goal definition
    sensor_msgs/Image input_map				# the action server needs a map as a input image to segment it,
    										# IMPORTANT: The algorithm needs a black and white 8bit single-channel image (format 8UC1), which is 0 (black) for obstacles and 255 (white) for free space
    										#            todo: the image needs to be vertically mirrored compared to the map in RViz for using right coordinate systems
    										#                  OccupancyGrid map = origin lower left corner, image = origin upper left corner
    										#            todo: take the OccupanyGrid message here instead to avoid confusion and deal with map coordinates in server
    float32 map_resolution					# the resolution of the map in [meter/cell]
    geometry_msgs/Pose map_origin			# the origin of the map in [meter], NOTE: rotations are not supported for now
    float32 robot_radius					# effective robot radius, taking the enlargement of the costmap into account, in [meter]
    float32 coverage_radius					# radius that is used to plan the coverage planning for the robot and not the field of view, assuming that the part that needs to cover everything (e.g. the cleaning part) can be represented by a fitting circle (e.g. smaller than the actual part to ensure coverage), in [meter]
    geometry_msgs/Point32[] field_of_view	# the 4 points that define the field of view of the robot, relatively to the robot coordinate system (with x pointing forwards and y pointing to the left), in [meter]
    geometry_msgs/Point32 field_of_view_origin	# the mounting position of the camera spanning the field of view, relative to the robot center (x-axis points to robot's front side, y-axis points to robot's left side, z-axis upwards), in [meter]
    geometry_msgs/Pose2D starting_position	# starting pose of the robot in the room coordinate system [meter,meter,rad]
    int32 planning_mode						# 1 = plans a path for coverage with the robot footprint, 2 = plans a path for coverage with the robot's field of view
    
    
    ================================================================================
    MSG: sensor_msgs/Image
    # This message contains an uncompressed image
    # (0, 0) is at top-left corner of image
    #
    
    Header header        # Header timestamp should be acquisition time of image
                         # Header frame_id should be optical frame of camera
                         # origin of frame should be optical center of camera
                         # +x should point to the right in the image
                         # +y should point down in the image
                         # +z should point into to plane of the image
                         # If the frame_id here and the frame_id of the CameraInfo
                         # message associated with the image conflict
                         # the behavior is undefined
    
    uint32 height         # image height, that is, number of rows
    uint32 width          # image width, that is, number of columns
    
    # The legal values for encoding are in file src/image_encodings.cpp
    # If you want to standardize a new string format, join
    # ros-users@lists.sourceforge.net and send an email proposing a new encoding.
    
    string encoding       # Encoding of pixels -- channel meaning, ordering, size
                          # taken from the list of strings in include/sensor_msgs/image_encodings.h
    
    uint8 is_bigendian    # is this data bigendian?
    uint32 step           # Full row length in bytes
    uint8[] data          # actual matrix data, size is (step * rows)
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    ================================================================================
    MSG: geometry_msgs/Point32
    # This contains the position of a point in free space(with 32 bits of precision).
    # It is recommeded to use Point wherever possible instead of Point32.  
    # 
    # This recommendation is to promote interoperability.  
    #
    # This message is designed to take up less space when sending
    # lots of points at once, as in the case of a PointCloud.  
    
    float32 x
    float32 y
    float32 z
    ================================================================================
    MSG: geometry_msgs/Pose2D
    # Deprecated
    # Please use the full 3D pose.
    
    # In general our recommendation is to use a full 3D representation of everything and for 2D specific applications make the appropriate projections into the plane for their calculations but optimally will preserve the 3D information during processing.
    
    # If we have parallel copies of 2D datatypes every UI and other pipeline will end up needing to have dual interfaces to plot everything. And you will end up with not being able to use 3D tools for 2D use cases even if they're completely valid, as you'd have to reimplement it with different inputs and outputs. It's not particularly hard to plot the 2D pose or compute the yaw error for the Pose message and there are already tools and libraries that can do this for you.
    
    
    # This expresses a position and orientation on a 2D manifold.
    
    float64 x
    float64 y
    float64 theta
    
    ================================================================================
    MSG: ipa_building_msgs/RoomExplorationActionResult
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    Header header
    actionlib_msgs/GoalStatus status
    RoomExplorationResult result
    
    ================================================================================
    MSG: actionlib_msgs/GoalStatus
    GoalID goal_id
    uint8 status
    uint8 PENDING         = 0   # The goal has yet to be processed by the action server
    uint8 ACTIVE          = 1   # The goal is currently being processed by the action server
    uint8 PREEMPTED       = 2   # The goal received a cancel request after it started executing
                                #   and has since completed its execution (Terminal State)
    uint8 SUCCEEDED       = 3   # The goal was achieved successfully by the action server (Terminal State)
    uint8 ABORTED         = 4   # The goal was aborted during execution by the action server due
                                #    to some failure (Terminal State)
    uint8 REJECTED        = 5   # The goal was rejected by the action server without being processed,
                                #    because the goal was unattainable or invalid (Terminal State)
    uint8 PREEMPTING      = 6   # The goal received a cancel request after it started executing
                                #    and has not yet completed execution
    uint8 RECALLING       = 7   # The goal received a cancel request before it started executing,
                                #    but the action server has not yet confirmed that the goal is canceled
    uint8 RECALLED        = 8   # The goal received a cancel request before it started executing
                                #    and was successfully cancelled (Terminal State)
    uint8 LOST            = 9   # An action client can determine that a goal is LOST. This should not be
                                #    sent over the wire by an action server
    
    #Allow for the user to associate a string with GoalStatus for debugging
    string text
    
    
    ================================================================================
    MSG: ipa_building_msgs/RoomExplorationResult
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # result definition
    geometry_msgs/Pose2D[] coverage_path			# when the server should return the coverage path, this is done returning the points in an array that shows the order of visiting
    geometry_msgs/PoseStamped[] coverage_path_pose_stamped			# (same content as coverage_path but different format) when the server should return the coverage path, this is done returning the points in an array that shows the order of visiting
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
    ================================================================================
    MSG: ipa_building_msgs/RoomExplorationActionFeedback
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    Header header
    actionlib_msgs/GoalStatus status
    RoomExplorationFeedback feedback
    
    ================================================================================
    MSG: ipa_building_msgs/RoomExplorationFeedback
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # feedback definition
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new RoomExplorationAction(null);
    if (msg.action_goal !== undefined) {
      resolved.action_goal = RoomExplorationActionGoal.Resolve(msg.action_goal)
    }
    else {
      resolved.action_goal = new RoomExplorationActionGoal()
    }

    if (msg.action_result !== undefined) {
      resolved.action_result = RoomExplorationActionResult.Resolve(msg.action_result)
    }
    else {
      resolved.action_result = new RoomExplorationActionResult()
    }

    if (msg.action_feedback !== undefined) {
      resolved.action_feedback = RoomExplorationActionFeedback.Resolve(msg.action_feedback)
    }
    else {
      resolved.action_feedback = new RoomExplorationActionFeedback()
    }

    return resolved;
    }
};

module.exports = RoomExplorationAction;