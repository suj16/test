import cv2
import os

def process_image(input_path, output_path):
    # 读取图像
    image = cv2.imread(input_path, cv2.IMREAD_GRAYSCALE)

    # 将像素值除254以外的像素点都标为0
    image[image != 254] = 0

    # 保存处理后的图像为png格式
    cv2.imwrite(output_path, image, [cv2.IMWRITE_PNG_COMPRESSION, 0])

if __name__ == "__main__":
    # 获取当前脚本所在的目录
    current_directory = os.path.dirname(os.path.abspath(__file__))

    # 输入和输出文件路径
    input_image_path = os.path.join(current_directory, "map.pgm")
    output_image_path = os.path.join(current_directory, "processed_map.png")

    # 处理图像
    process_image(input_image_path, output_image_path)

    print("图像处理完成。")

